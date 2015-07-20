var express 	= require('express'),
	app			= express(),
	mysql		= require('mysql'),
	ghost		= require('ghost');

ghost().then(function (ghostServer) {
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    ghostServer.start(app);
});

app
	.use(express.static('./public'))
	.get('*', function (req, res) {
		res.sendfile('public/main.html');
	})
	.listen(3000);

