var express = require('express');
var serveIndex = require('serve-index');

var app = express();

app.all('/ws/date', function(req, res, next) {
	console.log('date', req.url);
	setTimeout(function() {
		res.json({date: new Date().getTime()});		
	}, 2000);
});

app.use(express.static('.'));
app.use(serveIndex('.', {icons: true}));

app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

var port = 8000;
app.listen(port, function() {
	console.log('server started on port ' + port);
});
