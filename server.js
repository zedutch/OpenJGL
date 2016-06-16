var express = require('express'),
    morgan  = require('morgan'),
    app     = express();

// CONFIGURATION
app.use(morgan('dev'));
app.set('port',  8080);
app.use('/lib',  express.static(__dirname + '/node_modules'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/test', express.static(__dirname + '/test'));
app.use(function(err, req, res, next){res.status(err.status || 500);});

app.use('/', function(req, res) {
    res.sendFile(__dirname + '/test/index.html');
});

module.exports = app;

// SERVER
app.listen(app.get('port'), function() {
    console.log("ExpressJS: listening on port " + app.get('port'));
});