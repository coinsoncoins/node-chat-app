const path = require('path');
const publicPath = path.join(__dirname, "../public");
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;

console.log(__dirname + '/public');
console.log(publicPath);

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'user1',
    text: 'hello from user1',
    createdAt: new Date().getTime()
  })

  socket.on('disconnect', () => {
    console.log('client disconnected');
  })

  socket.on('createEmail', (email) => {
    console.log('create email: ', email)
  })

  socket.on('createMessage', (message) => {
    console.log('create message: ', message)
  })
})

server.listen(port, () => {
  console.log(`started on port ${port}`);
})
