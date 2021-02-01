import io from "socket.io-client";

const socket = io('http://localhost:3001')

socket.emit('hello', 'hello')

socket.on('hi back', (data: string) => console.log(data))
