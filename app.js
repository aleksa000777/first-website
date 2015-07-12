var lessMiddleware = require('less-middleware');
var express = require('express');
var jade = require('jade');

var app = express();

var public = __dirname.replace(/\\/g, '/') + '/public';

console.log("public", public);

app.use(lessMiddleware(public + '/less', {
	force: true
}));
app.use(express.static(public + '/img'));
app.use(express.static(public + '/js'));
app.use(express.static(public + '/less'));

app.set('views', './views');
app.set('view engine', 'jade');

// var bodyParser = require('body-parser')
// app.use(bodyParser.json());       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
// 	extended: true
// }));

// app.use(express.json());       // to support JSON-encoded bodies
// app.use(express.urlencoded()); // to support URL-encoded bodies
app.get ('/myminer', function(req, res){
	res.render('myminer', {});
})
app.post('/subscribe/user', function(req, res){
	res.send({
		status: "success" //basa dannih budet tuta
	});
})

app.get('/', function (req, res) { // req means request and res means response
  res.send('Hello World!');
});


app.get('/test', function (req, res) { // req means request and res means response
  res.send('Hello Sasha!');
});


app.get('/google', function(req,res) {
  res.render('test', {});
});

// we're going to change this to post once we figure out how to populate req.body
app.get('/signup', function(req,res) {
	console.log("req.body", req.body);
	console.log("req.params", req.params);
	console.log("req.query", req.query);


	// Database example for later
	// var newUser = {
	// 	name: req.body.name
	// }

	// db.save("users", newUser, function(err, user) {
	// 	if (err) res.send("Oh no!", 409);
	// 	if (user) {
	// 		res.render("congrats", { user: user });
	// 	}
	// });

  res.render('test', {name: req.query.name});

});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});