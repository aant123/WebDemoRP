const bodyParser = require('body-parser')
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const cors = require('cors')
const axios = require('axios')

const port = process.env.PORT || 5010;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let socket;

app.use(cors());
io.on('connection',_socket =>{
    socket = _socket
    console.log('connect Port 5010 in callbackHandler')
})
app.use(bodyParser.json({ limit: '2mb' }));
app.post('/rp/request/:referenceId', async (req, res) => {
  try {
    const callbackData = req.body;
    console.log('Received request callback from NDID API:', JSON.stringify(callbackData, null, 2));
    callbackEvent(callbackData); 
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

app.post('/rp/request/close', async (req, res) => {
  try {
    const callbackData = req.body;
    console.log('Received close request callback from NDID API:', JSON.stringify(callbackData, null, 2));
    callbackEvent(callbackData);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

function callbackEvent(data) {
    if (data.type === 'create_request_result') {
        console.log('Create request result', data);   
    } else if (data.type === 'request_status') {
              if (data.mode === 1) {
                if (data.status === 'completed') {
                    socket.emit('callBackSucess',data)
                } else if (
                  data.status === 'rejected' &&
                  data.answered_idp_count === data.min_idp
                ) {
                  closeRequest(data.request_id);
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
    if (socket) {
        socket.emit('message', data);
    }
}

async function closeRequest(requestId) {
    const reference_id = (Date.now() % 100000).toString();
    const req = await axios.post('http://localhost:5010/rp/request/close',{
        reference_id,
        callback_url: 'http://localhost:5010/rp/request/close',
        request_id: requestId,
      })
      return req;
  }

server.listen(port, () =>
  console.log(
    `Listening to NDID API callbacks on port ${port}`
  )
);
