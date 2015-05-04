'use strict';
var express = require('express'),
	app = express(),
	server = require('http').Server(app);
	
app.use('dist', express.static(__dirname + '/dist'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/scripts',express.static(__dirname + '/dist/scripts'));
app.use('/images',express.static(__dirname + '/dist/images'));
app.use('/styles',express.static(__dirname + '/dist/styles'));
app.use('/views',express.static(__dirname + '/dist/views'));

app.use('/*', function(req, res) {
	console.log('Catch-all triggered');
	console.log(req.baseUrl);
	res.sendFile(__dirname + '/dist/index.html');
});

server.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});