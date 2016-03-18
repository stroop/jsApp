var express 	= require('express'),
	path        = require('path'),
    httpProxy   = require('http-proxy'),
    bodyParser  = require('body-parser'),
	mongoose    = require('mongoose'),
    fs          = require('fs');

var app			= express();

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

// set port config to node env or default 3000
app.set('port', process.env.PORT || 3000);
// directory to serve
app.use(express.static(path.join(__dirname, 'public')));


/* DATABASE */

// development env
if ('development' == app.get('env')) {
    //app.use(express.errorHandler());
    mongoose.connect('mongodb://jsapp-dev:jsapp-dev@ds011389.mlab.com:11389/jsapp-dev', function(err) {
        if (err) {
            console.error(chalk.red('Could not connect to MongoDB!'));
            console.log(chalk.red(err));

        }
    });
}

// load all files in models dir
fs.readdirSync(__dirname + '/app/models').forEach(function(filename) {
   if (~filename.indexOf('.js')) {
       require(__dirname + '/app/' + '/models/' + filename);
   }
});

// get cv
app.get('/api/cv/:id', function(req, res) {
    var id = req.params.id;
    mongoose.model('cv').findById(id, function (err, cv) {
        res.send(cv);
    });
});
// get all blog posts
app.get('/api/blog', function(req, res) {
    mongoose.model('post').find(function (err, posts) {
        res.send(posts);
    });
});

//get blog post by id
app.get('/api/blog/:id', function(req, res) {
    var id = req.params.id;
    mongoose.model('post').findById(id, function (err, post) {
       res.send(post);
    });
});

// initial catch all route to map to client side routing
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// initialize server on port and log success to console
app.listen(app.get('port'), function() {
		console.log('express listening on port ' + app.get('port'));
	});

