var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    
    res.send('user created');
});

router.get('/:id', function(req, res, next) {
  res.render('users', {list: 'test'});
});

router.delete('/:id', function(req, res, next) {
    res.send('user deleted');
});

module.exports = router;