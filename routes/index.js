var express = require('express');
var mongoose = require('mongoose');
var plugin = mongoose.model('Plugin');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    plugin.count({}, function(err, c) {
        console.log(c);
        plugin.distinct('entry.guid').count({}, function(err, serverCount) {
            res.render('index', { title: 'Statik', numberOfPlugins: c, numberOfServers: serverCount });
        });
    });
});

router.get('/info', function(req, res) {
   res.render('info', { title: 'Statik - More Information'});
});

module.exports = router;
