// import {express} from 'express'
// import http from 'http'
// import bodyParser from 'body-parser';
// import socketIo from 'socket.io'
// import cors from 'cors'
// import axios from 'axios'
const bodyParser = require('body-parser')
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const cors = require('cors')
const axios = require('axios')

const port = process.env.PORT || 5000;
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
    getIdpList(socket)
    socket.on("disconnect", () => console.log("Client disconnected"));
  });

const getIdpList = async socket => {
    try {
      const res = await axios.get('http://localhost:8200/utility/idp'); 
      socket.emit('GetIdpList', res.data);
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  };

// socket.on('CreateRequest', async data => {
  app.post('/createRequest', async (req, res) => {
  console.log('req',req.body)
    const {
      mode,
      namespace,
      identifier,
      request_timeout,
      idp_id_list,
      reference_id
    } = req.body;

    try {
      const request = await axios.post(`http://localhost:8200/rp/requests/${namespace}/${identifier}`,{
        mode,
        namespace,
        identifier,
        reference_id,
        idp_id_list: idp_id_list || [],
        callback_url: `http://localhost:5010/rp/request/${reference_id}`,
        data_request_list: [],
        request_message: '',
        min_ial: 1.1,
        min_aal: 1,
        request_timeout: request_timeout ? parseInt(request_timeout) : 86400,
      });
      console.log('request',request)
      request.status(200).json({requestId: request.reference_id});
    } catch (error) {
      console.log('error')
    }
  });
server.listen(port, () => console.log(`Listening on port ${port}`));