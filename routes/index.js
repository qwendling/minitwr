var express = require('express');
var router = express.Router();
var tweets = [];
var messages = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tweets: tweets });
});

router.get('/messages', function(req, res, next) {
  res.render('messages', { title: 'Express', messages: messages });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Express'});
});

router.post('/', function(req, res, next) {
	var currentdate = new Date();
	var date = " le " + currentdate.getDate()+ "/" + (currentdate.getMonth()+1) +" à " + currentdate.getHours() + ":" + currentdate.getMinutes();
	
  tweets.unshift(req.body.tweet+date);
  res.redirect('/')
});


module.exports = router;



