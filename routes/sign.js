var express = require('express');
var router = express.Router();

/* login */
router.get('/', function(req, res, next){
    res.render('signin', { title: 'Entrar'});
});

/* register */
router.get('/new', function(req, res, next){
    res.render('signup', { title: 'Cadastrar'});
});


module.exports = router;