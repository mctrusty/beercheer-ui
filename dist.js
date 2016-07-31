'use strict';
var express = require('express'),
	favicon = require('serve-favicon'),
	app = express(),
	server = require('http').Server(app);
	
app.set('port', (process.env.PORT || 5000));

app.use(favicon(__dirname + '/app/favicon.ico'));
app.use('dist', express.static(__dirname + '/dist'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/scripts', express.static(__dirname + '/dist/scripts'));
app.use('/images', express.static(__dirname + '/dist/images'));
app.use('/styles', express.static(__dirname + '/dist/styles'));
app.use('/views', express.static(__dirname + '/dist/views'));
app.use('/fonts', express.static(__dirname + '/dist/fonts'));

app.use('/', function(req, res) {
	console.log('Catch-all triggered');
	console.log(req.baseUrl);
	res.sendFile(__dirname + '/dist/index.html');
});

server.listen(app.get('port'), function() {
	console.log('Listening on port %d', server.address().port);
});
