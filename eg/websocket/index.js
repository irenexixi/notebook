// var app = require('express')();
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(9201);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function(socket){

	socket.broadcast.emit('hi');

	socket.on('chat message', function(msg){
		console.log("msg: " + msg);
    	io.emit('chat message', msg);
  	});

	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});
});

// http.listen(3000,function() {
// 	console.log('listening on *:3000');
// });