var express 	= requre('express'),
	Bourne 		= require('bourne'),
	bodyParser 	= require('body-parser'),

	db			= new Bourne('sections.json'),
	router		= express.Router();

router
	.use(function (req, res, next) {
		if(!req.user) req.user = { id: 1};
		next();
	})
	.use(bodyParser.json())
	.route('/home')
		.get(function (req, res) {
			
		})
		.post(function (req, res) {
			
		});

// api to query / update database

// get all projects
app.get('api/projects', function (req, res) {

	connection.query("SELECT * from project", function (err, rows) {
		
		if(err) {
			console.log("Problem with MySQL" + err);
		}
		else {
			res.end(JSON.stringify(rows));
		}
	});
});