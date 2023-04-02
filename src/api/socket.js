import config from '../../config.json'
import { io } from 'socket.io-client'

const nickname = sessionStorage.getItem('nickname')

const socket = io(config.socket_url, {
  autoConnect: config.socket_auto_connect,
  secure: config.socket_secure,
})

socket.emit('login', nickname)

export default socket
