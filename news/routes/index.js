var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var pool = require('./lib/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM news.newscenter ORDER BY news_date DESC', function(err, results) {
    if (err) throw err;
    res.render('index', { data:results});

    console.log(results[0]);
  });
});

module.exports = router;
