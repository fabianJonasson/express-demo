var express = require('express');
var router = express.Router();

let allUsers = ['hej', 'då']

router.get('/', function(req, res, next) {
  res.render('users', {list: allUsers});
});

module.exports = router;