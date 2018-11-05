const config = require('../config')
const bodyParser = require('body-parser')
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const axios = require('axios')
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false, limit: '2mb' }));
app.use(bodyParser.json({ limit: '2mb' }));
let socket;

app.use(express.static(path.resolve('../../../', 'build')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve('../../../', 'build', 'index.html'));
})

io.on("connection", _socket => {
    console.log("New client connected")
    socket = _socket
    socket.on("disconnect", () => console.log("Client disconnected"));
  });

app.get('/listIdp',async (req,res) => {
  try {
    const res = await axios.get(`http://${config.ndidApiMasterIp}:${config.ndidApiMasterPort}/utility/idp`); 
    socket.emit('GetIdpList', res.data);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
})

app.post('/createRequest', async (req, res) => {
    const {
      node_id,
      mode,
      namespace,
      min_idp,
      identifier,
      idp_id_list,
      reference_id
    } = req.body;

    try {
      const request = await axios.post(`http://${config.ndidApiMasterIp}:${config.ndidApiMasterPort}/rp/requests/${namespace}/${identifier}`,{
        node_id,
        mode,
        min_idp,
        namespace,
        identifier,
        reference_id,
        idp_id_list: idp_id_list || [],
        callback_url: `http://${config.ndidApiCallBackIp}:${config.ndidApiCallBackPort}/rp/request/${reference_id}`,
        data_request_list: [],
        request_message: '',
        min_ial: 1.1,
        min_aal: 1,
        request_timeout: config.timeout,
      });
      req.status(200).json({requestId: request.data.reference_id});
    } catch (error) {
      // res.status(500).json(error.error ? error.error.message : error);
    }
  });


app.post('/createRequestAs', (req, res)=> {
  setTimeout(function(){
     const isSuccess = true;
     socket.emit('acceptFromAS',isSuccess)
  },10000)
})

app.post('/rp/request/:referenceId',(req, res) => {
  try {
    const callbackData = req.body;
    callbackEvent(callbackData); 
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
});

app.post('/rp/request/close', (req, res) => {
  try {
    const callbackData = req.body;
    callbackEvent(callbackData);
    res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
});

function callbackEvent(data) {
  let requestStatus = ''
  if(data.timed_out) {
    requestStatus = 'timeout'
    socket.emit('requestStatus', requestStatus)
  }
  else{
    if (data.type === 'request_status') {
              if (data.mode === 1) {
                if (data.status === 'completed') {
                    requestStatus = data.status
                    socket.emit('requestStatus', requestStatus)
                    closeRequest(data.request_id)
                } else if (data.status === 'rejected') {
                    requestStatus = data.status
                    socket.emit('requestStatus', requestStatus)
                    closeRequest(data.request_id)
                }
              }
    } else if (data.type === 'close_request_result') {
              if (data.success) {
                console.log('Successfully close request ID:', data.request_id);
              } else {
                console.error('Error closeing request ID:', data.request_id);
              }
    } else if (data.type === 'error') {
    } else {
              console.error('Unknown callback type', data);
              return;
    }
  }
}

async function closeRequest(requestId) {
    const reference_id = (Date.now() % 100000).toString();
    const req = await axios.post(`http://${config.ndidApiCallBackIpClient}:${config.ndidApiCallBackPort}/rp/request/close`,{
        reference_id,
        callback_url: `http://${config.ndidApiCallBackIpClient}:${config.ndidApiCallBackPort}/rp/request/close`,
        request_id: requestId,
      })
      return req;
}

server.listen(config.ndidServerPort, () => console.log(`Listening on port ${config.ndidServerPort}`));
