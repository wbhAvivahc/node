var express = require('express');
var router = express.Router();
const db = require('../db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const mysqlQuery = 'select * from user_info';

  db.DBconnection.query(mysqlQuery,function(err,rows,fields){
    if(err){
      console.log(err,'err');
      return 
    };
      console.log(rows,'boom')
    // res.render('user', {students: rows})
  })
  // res.send('respond with a resource');
});

module.exports = router;
