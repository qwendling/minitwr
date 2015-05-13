var express = require('express');
var router = express.Router();
var tweets = [];
var messages = [];
var currentdate = new Date();
var date = currentdate.getDate()+ "/" + (currentdate.getMonth()+1);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tweets: tweets });
});

router.get('/messages', function(req, res, next) {
  res.render('messages', { title: 'Express', messages: messages });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Express', tweets: tweets });
});

router.post('/', function(req, res, next) {
  tweets.unshift(req.body.tweet+date);
  res.redirect('/')
});

router.post('/messages', function(req, res, next) {
  messages.unshift(req.body.mess);
  res.redirect('messages')
});


module.exports = router;



