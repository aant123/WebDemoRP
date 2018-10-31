import * as config from './config'
import socketIOClient from "socket.io-client";
import axios from 'axios'
const socket = socketIOClient(`http://${config.ndidServerIp}:${config.ndidServerPort}`);
const socketCallBack = socketIOClient(`http://${config.ndidApiCallBackIpClient}:${config.ndidApiCallBackPort}`)

const getData = () => {
  axios.get(`http://${config.ndidServerIp}:${config.ndidServerPort}/listIdp`)
 return new Promise((resolve, reject) => {
  socket.on('GetIdpList',idp => {
    resolve(idp)})
})
}

const postRequest = (data) => {
  axios.post(`http://${config.ndidServerIp}:${config.ndidServerPort}/createRequest`,data)
  return new Promise((resolve, reject) => {
    socketCallBack.on('requestStatus', requestStatus => {
      resolve(requestStatus)
    })
}
)}

const requestToAs = () => {
  axios.post(`http://${config.ndidServerIp}:${config.ndidServerPort}/createRequestAs`,{})
  return new Promise((resolve, reject) => {
    socket.on('acceptFromAS', data => {
      resolve(data)
    })
  })
}

export {
  getData,
  postRequest,
  requestToAs
}