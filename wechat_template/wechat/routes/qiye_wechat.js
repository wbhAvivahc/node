var express = require('express');
var router = express.Router();
var axios = require('axios');

var http = require('http');

var wxCrypto = require('../wxCrypto.js');
//发送文本消息
function sendMessage(access_token){
  axios({
    method: 'get',
    url: 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token='+access_token,
  }).then(response => {
    console.log(response.data);
    // res.send(response.data);1
  }).catch(err => {
    console.log(err);
  });
  
};

//获取token
function getToken(){
  axios({
    method: 'get',
    url: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=ww5f9fbf6915683fbd&corpsecret=qJB-lrNQVVjUMidveoGx8XGZFQb1yCIss28EX2U-C5Y&msgtype="text"&agentid="1000003"&content="12345456"&touser="WangBingHan"',
    // data:{
    //   corpid : ww5f9fbf6915683fbd,
    //   corpsecret : qJB-lrNQVVjUMidveoGx8XGZFQb1yCIss28EX2U-C5Y,
    //   msgtype: 'text',
    //   agentid: '1000003',
    //   content: '121222222',
    //   touser: "WangBingHan",
    // }
  }).then(response => {
    console.log(response.data);
    sendMessage(response.data.access_token);
    // res.send(response.data);
  }).catch(err => {
    console.log(err);
  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  const ajax = axios.create({
    baseURL: 'https://qyapi.weixin.qq.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
  getToken();
  
  res.send('respond with a qiye');
});


router.get('/url_yanzheng',(req,res) => {
  // console.log(wxCrypto,'wxCrypto')
  // var messageData ={
  //   Encrypt: req.query.echostr
  // };
  //var message = wxCrypto.decryptMsg(req.query.msg_signature,req.query.timestamp,req.query.nonce,messageData);
  // var wxCrypt = new wxCrypto({
  //   token: 'r0YaavImKlPmFeDrD1rgutXv4', 
  //   appid: 'ww5f9fbf6915683fbd',
  //   msg_signature: req.query.msg_signature,
  //   encodingAESKey: 'of3pXVceFlqPw0EKqR5NUnihIifeVhf6ehcKS2om7eI'
  // })
  var test = new wxCrypto({
    token: 'r0YaavImKlPmFeDrD1rgutXv4', 
    appid: 'ww5f9fbf6915683fbd',
    msg_signature: req.query.msg_signature,
    encodingAESKey: 'of3pXVceFlqPw0EKqR5NUnihIifeVhf6ehcKS2om7eI'
  })
  // var test = new Buffer(req.query.echostr, 'base64').toString();
  // test = test.slice(20)
  console.log(test,'dddddddddddddddddddd')
  res.end('response')
})
module.exports = router;
