import socketIOClient from "socket.io-client";
import axios from 'axios'
const socket = socketIOClient('http://localhost:5000/');
const socketCallBack = socketIOClient('http://localhost:5001/')
const getData = () => {
 return new Promise((resolve, reject) => {
  socket.on('GetIdpList',idp => {
    resolve(idp)})
})
}
const postRequest = (data) => {
  axios.post('http://localhost:5000/createRequest',data)
  return new Promise((resolve, reject) => {
    socketCallBack.on('callBackSucess', data => {
      resolve(data)
    })
}
)}

export {
  getData,
  postRequest
}