var express = require('express');
var mongoose = require('mongoose');
var plugin = mongoose.model('Plugin');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    plugin.count({}, function(err, c) {
        console.log(c);
        res.render('index', { title: 'Statik', numberOfPlugins: c });
    });
});

module.exports = router;
