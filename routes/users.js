var express = require('express');
var router = express.Router();

let allUsers = [
    {id: 1, name: "fabian"}
];

router.get('/', function(req, res, next) {
    const names = [];
    allUsers.forEach(user => {names.push(user.name)});
    res.render('users', {list: names});
});

module.exports = router;