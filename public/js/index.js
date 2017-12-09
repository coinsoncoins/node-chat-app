let socket = io();
socket.on('connect', () => {
  console.log('connected to server');

  socket.emit('createMessage', {
    user: 'bobbysue',
    text: 'hi from bobbysue'
  })
})
socket.on('disconnect', () => {
  console.log('disconnected from server');
})
socket.on('newEmail', (email) => {
  console.log('new email ', email);
})
socket.on('newMessage', (message) => {
  console.log('new message: ', message);
})
