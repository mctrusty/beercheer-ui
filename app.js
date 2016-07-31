'use strict';
var express = require('express'),
	favicon = require('serve-favicon'),
	app = express(),
	server = require('http').Server(app);
	
app.use(favicon(__dirname + '/app/favicon'));

app.use(express.static(__dirname + '/public'));
app.use('app', express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/scripts',express.static(__dirname + '/app/scripts'));
app.use('/images',express.static(__dirname + '/app/images'));
app.use('/styles',express.static(__dirname + '/app/styles'));
app.use('/views',express.static(__dirname + '/app/views'));

app.use('/*', function(req, res) {
	console.log('Catch-all triggered');
	console.log(req.baseUrl);
	res.sendFile(__dirname + '/app/index.html');
});

server.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});
