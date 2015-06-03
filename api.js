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