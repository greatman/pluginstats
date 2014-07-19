var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/1', function(req, res) {
    res.send('respond with a resource');
});
router.get('/login', function(req,res) {
    res.render('login', { title: 'Login' });
});
router.post('/login', function(req,res) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: 'true'
    });
});
module.exports = router;
