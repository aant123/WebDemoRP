import axios from 'axios'
import socketIOClient from "socket.io-client";

const getData = () => {
const socket = socketIOClient('http://localhost:5000/');
 return new Promise((resolve, reject) => {
  socket.on('GetIdpList',idp => {
    resolve(idp)})
})
}

export {
  getData
}