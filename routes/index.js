const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home-page', { title: 'Narayana Yoga | PÁGINA PRINCIPAL' });
});

/* GET teachings page. */
router.get('/teachings', function(req, res, next) {
  res.render('teachings', { title: 'Narayana Yoga | Enseñanzas' });
});

/* GET training page. */
router.get('/training', function(req, res, next) {
  res.render('training', { title: 'Narayana Yoga | FORMACIÓN MFY' });
});

/* GET tools page. */
router.get('/tools', function(req, res, next) {
  res.render('tools', { title: 'Narayana Yoga | HERRAMIENTAS' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Narayana Yoga | SOBRE MI' });
});

/* GET practices page. */
router.get('/practices', function(req, res, next) {
  res.render('practices', { title: 'Narayana Yoga | PRÁCTICAS' });
});

/* GET insights page. */
router.get('/insights', function(req, res, next) {
  res.render('insights', { title: 'Narayana Yoga | INSIGHTS' });
});

/* GET mentoring page. */
router.get('/mentoring', function(req, res, next) {
  res.render('mentoring', { title: 'Narayana Yoga | Mentorías y consultas' });
});

/* GET comments page. */
router.get('/comments', function(req, res, next) {
  res.render('comments', { title: 'Narayana Yoga | Comentarios destacados' });
});

module.exports = router;
