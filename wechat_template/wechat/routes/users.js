var express = require('express');
var router = express.Router();
var axios = require('axios');

var http = require('http');
/* GET users listing. */
router.get('/', function(req, res, next) {
  //模拟发送http请求
  // var options = {
  //   host: 'https://api.weixin.qq.com',
  //   port: 80,
  //   path: '/sns/oauth2/access_token?appid=wxabefe283fbac5f24&secret=3527d16c4629e51d31c3e998df0f123e&code='+req.query.code+'&grant_type=authorization_code',
  //   method: 'GET',
  // };
  // //get请求
  // http.request(options, function (error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //         console.log(body) // Show the HTML for the baidu homepage.
  //     }
  // });

  const ajax = axios.create({
    baseURL: 'https://api.weixin.qq.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
    ajax({
      method: 'get',
      url: '/sns/oauth2/access_token?appid=wxabefe283fbac5f24&secret=3527d16c4629e51d31c3e998df0f123e&code='+req.query.code+'&grant_type=authorization_code',
    }).then(response => {
      console.log(response.data);
      // res.send(response.data);
    }).catch(err => {
      console.log(err);
    });
    res.send('respond with a resource');
});

module.exports = router;
