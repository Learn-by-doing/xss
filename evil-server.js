var express = require('express');
var app = express();

app.get('/cookie', function(req, res, next) {

	console.log('GET /cookie');
	console.log(req.query.cookie);

	res.send('Thanks!');
});

app.listen(3001, function() {
	console.log('"Evil" server listening at localhost:3001');
});
