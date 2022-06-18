var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const value = ['A','B','C','D']

  const person = {name:"devan",comments:{content:"this is a another comment",date:"26-02-2000"}}

  res.render('index',{person});
});

module.exports = router;
