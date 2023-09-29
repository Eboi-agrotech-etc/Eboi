var express = require('express');
var router = express.Router();

/* login */
router.get('/', function(req, res, next){
    res.render('signin', { title: 'sign in' });
});

/* register */
router.get('/new', function(req, res, next){
    console.log('on-line');
    res.render('signup', { title: 'sign up' });
});


module.exports = router;