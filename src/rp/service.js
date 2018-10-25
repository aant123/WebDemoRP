import socketIOClient from "socket.io-client";
import axios from 'axios'
const socket = socketIOClient('http://localhost:5000/');
const getData = () => {
 return new Promise((resolve, reject) => {
  socket.on('GetIdpList',idp => {
    resolve(idp)})
})
}
const postRequest = (data) => {
  console.log('data',data)
  // socket.emit('CreateRequest', data)
  axios.post('http://localhost:5000/createRequest',data)
  return new Promise((resolve, reject) => {
    socket.on('callBackSucess', data => {
      resolve(data)
    })
}
)}

export {
  getData,
  postRequest
}