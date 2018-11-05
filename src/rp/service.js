import * as config from './config'
import socketIOClient from "socket.io-client";
import axios from 'axios'

const socket = socketIOClient(`http://${config.ndidServerIp}:${config.ndidServerPort}`); //http://localhost:3000
const socketClient = socketIOClient(`http://${config.ndidApiCallBackIpClient}:${config.ndidApiCallBackPort}`) //http://localhost:3000

const getData = () => {
 axios.get(`http://${config.ndidServerIp}:${config.ndidServerPort}/listIdp`)
 return new Promise((resolve, reject) => {
  socketClient.on('GetIdpList',idp => {
    console.log('idp',idp)
    resolve(idp)})
})
}

const postRequest = (data) => {
  axios.post(`http://${config.ndidServerIp}:${config.ndidServerPort}/createRequest`,data)
  return new Promise((resolve, reject) => {
    socketClient.on('requestStatus', requestStatus => {
      resolve(requestStatus)
    })
}
)}

const requestToAs = () => {
  axios.post(`http://${config.ndidServerIp}:${config.ndidServerPort}/createRequestAs`,{})
  return new Promise((resolve, reject) => {
    socketClient.on('acceptFromAS', data => {
      resolve(data)
    })
  })
}

export {
  getData,
  postRequest,
  requestToAs
}