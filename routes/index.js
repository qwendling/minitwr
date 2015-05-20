var express = require('express');
var router = express.Router();
var tweets = [];
var messages = [];
var pseudo;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MiniTwr' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express', tweets: tweets , pseudo:pseudo});
});

router.get('/messages', function(req, res, next) {
  res.render('messages', { title: 'Express', messages: messages });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Express'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express'});
});

router.post('/pseudo', function(req, res, next) {
    pseudo = req.body.pseudo;
    console.log(req.body.pseudo);
    res.redirect('/home');
});

router.post('/home', function(req, res, next) {
	var currentdate = new Date();
	var date = "(le " + currentdate.getDate()+ "/" + (currentdate.getMonth()+1) +" à " + currentdate.getHours() + ":" + currentdate.getMinutes()+") ";
	
  tweets.unshift({
  		content:req.body.tweet,
  		time:date,
  		pseudo:pseudo
  		});
  res.redirect('/home')
});


module.exports = router;



