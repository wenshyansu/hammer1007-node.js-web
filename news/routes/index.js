var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { ntype: '公告', nsubject: '新聞測試！', ndate: '2017-11-01', nhits: '1' });
});

module.exports = router;
