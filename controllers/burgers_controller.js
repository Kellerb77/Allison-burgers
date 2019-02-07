var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

//ROUTE FOR THE ROOT FILE / 
router.get('/', function(req, res) {
	res.redirect('/burgers');
});

//ROUTE FOR THE /BURGERS 
router.get('/burgers', function(req, res) {
	burgers.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		//console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

//POST ROUTE, POST A BURGER NAME AND IF IT WAS DEVOURED
router.post('/burgers/create', function(req, res) {
	burgers.create(['name', 'devoured'], [req.body.name, req.body.devoured], function() {
		res.redirect('/burgers');
	});
});

//PUT ROUTE 
router.put('/burgers/devour/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	burgers.devour({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect('/burgers');
	});
});


//ROUTE FOR DELETE 
router.delete('/burgers/clear/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;
	burgers.clear(condition, function() {
		res.redirect('/burgers');
	});
});

module.exports = router;
