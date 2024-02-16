var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Narayana Yoga by NaN Rivas' });
});

module.exports = router;
