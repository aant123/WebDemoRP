const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors')
const axios = require("axios");
const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(cors());

io.on("connection", socket => {
    console.log("New client connected")
    socket.on("disconnect", () => console.log("Client disconnected"));
  });

server.listen(port, () => console.log(`Listening on port ${port}`));