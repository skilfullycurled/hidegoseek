var express = require('express');
var app = express();

var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
});

io.on('connection', function(socket) {
  console.log('A user connected!');

  socket.on('location', function(data){
    console.log(data);
  });

  socket.on('disconnect', function(){
    console.log('A user disconnected.')
  });
});

server.listen(8084, function(){
  console.log('bring it on port */8084')
});

app.use(express.static('assets'));



// io.sockets.on('connection', function(socket) {
//   socket.on('location', function(data) {
//     io.sockets.emit('location', data);
//   });
// });




//
// var app = require('express')();
// var server = require('http').createServer(app);
// var io = require('socket.io').listen(server);
// server.listen(process.env.PORT || 8082);
//
// io.sockets.on('connection', function (socket) {
//   socket.on('location', function (data) {
//     io.sockets.emit('location', data);
//   });
// });
