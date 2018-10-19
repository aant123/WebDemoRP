const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors')
const axios = require("axios");
const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server); // < Interesting!
app.use(cors());

io.on("connection", socket => {
    console.log("New client connected")
    getIdpList(socket)
    socket.on("disconnect", () => console.log("Client disconnected"));
  });

const getIdpList = async socket => {
    try {
      const res = await axios.get('http://localhost:8200/utility/idp'); // Getting the data from DarkSky
      console.log('res',res.data)
      socket.emit('GetIdpList', res.data); // Emitting a new message. It will be consumed by the client
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  };
server.listen(port, () => console.log(`Listening on port ${port}`));