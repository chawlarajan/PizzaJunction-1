var express = require('express'),
    path = require('path'),
    fs = require('fs');

var app = express();
var server = require('http').createServer(app);  
var io = require('socket.io').listen(server);

var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

app.use(function(req, res, next){

    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if(accept !== 'html'){
        return next();
    }

    // if the request has a '.' assume that it's for a file, move along
    var ext = path.extname(req.path);
    if (ext !== ''){
        return next();
    }

    fs.createReadStream(staticRoot + 'index.html').pipe(res);
});

io.sockets.on('connection', function (socket) {
    socket.on('pizza junction store', function(data) {
        socket.join(data.store);
        console.log("joined: " + data.message);

    });
    socket.on('orderCompleted', function (data) {
        console.log(data);
        socket.broadcast.to(data.store).emit('notifyStore', data)

    });
});

server.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
});