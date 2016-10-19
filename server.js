var express = require('express');
var session = require('express-session');
var serverStatic = require('serve-static');
var app = express();

app.use(serverStatic(__dirname + '/public'));

app.use(session({
	secret: 'some randomly generated secret',
	resave: true,
	saveUninitialized: true,
	cookie: {
		httpOnly: false,
		secure: false
	}
}));

app.listen(3000, function() {
	console.log('Server listening at localhost:3000');
});
