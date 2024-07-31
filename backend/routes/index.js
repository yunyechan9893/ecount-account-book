var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'send' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {

  return   res.status(200).send("안녕");
});

module.exports = router;
