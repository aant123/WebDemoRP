const config = require('../config')
const bodyParser = require('body-parser')
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const cors = require('cors')
const axios = require('axios')
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.urlencoded({ extended: false, limit: '2mb' }));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());
let socket;

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


app.post('/createRequestAs', async (req, res)=> {
  setTimeout(function(){
     const isSuccess = true;
     socket.emit('acceptFromAS',isSuccess)
  },10000)
})
server.listen(config.ndidServerPort, () => console.log(`Listening on port ${config.ndidServerPort}`));
