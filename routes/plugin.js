var express = require('express');
var mongoose = require('mongoose');
var plugin = mongoose.model('Plugin');
var router = express.Router();

router.get('/', function(req, res) {
    plugin.find({}).sort({rank: 'desc'}).exec(function(err,doc) {
        res.render('plugin', {title: 'Statik - Plugin List', pluginList: doc})
    })
});
