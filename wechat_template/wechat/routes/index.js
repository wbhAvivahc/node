var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json({});
  console.log(req.query,'req')
  let _req = req.query;
  res.end(_req.echostr);
  // var key = ['weixin',_req.timestamp,_req.nonce].sort().join('');
  // var sha1=require('crypto').createHash('sha1');
  // sha1.update(key);
  // console.log(sha1.digest('hex') ,params.signature , '怎么回事啊')
  // if(sha1.digest('hex') ==params.signature){
  // }
});

module.exports = router;

//https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=id&corpsecret=secrect