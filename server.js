var express 	= require('express'),
	app			= express(),
	mysql		= require('mysql'),
	ghost		= require('ghost'),
    httpProxy   = require('http-proxy'),
    bodyParser  = require('body-parser');

var proxy = httpProxy.createProxyServer();

ghost().then(function (ghostServer) {
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    ghostServer.start(app);
});//

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ghost blog routes:
app.get('/blog*', function(req, res) {
    proxy.web(req, res, { target: 'http://127.0.0.1:2368' });
});

app.post('/blog*', function(req, res) {
    proxy.web(req, res, { target: 'http://127.0.0.1:2368' });
});

app.delete('/blog*', function(req, res) {
    proxy.web(req, res, { target: 'http://127.0.0.1:2368' });
});

app.put('/blog*', function(req, res) {
    proxy.web(req, res, { target: 'http://127.0.0.1:2368' });
});

app
	.use(express.static('./public'))
	.get('*', function (req, res) {
		res.sendfile('public/main.html');
	})
	.listen(3000);

