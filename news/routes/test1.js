var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var pool = require('./lib/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    pool.query('select * from news.newscenter where news_type=?', ["公告"], function(err, results) {
        if(err) throw err;
        res.render('test1', { data:results});

        console.log(results[0]);
    });
});

module.exports = router;