var wechatAPI = require('wechat-api');

var appid = 'wxabefe283fbac5f24';
var appsercret = '3527d16c4629e51d31c3e998df0f123e';
var api = new wechatAPI(appid, appsercret);

var sendmessage = function () {
  var openid = 'o2Tpw1tX-PHvzqJNUzbm4dkWeeIk'
  var templateId = 'heWY2SQylDxyEpyQeALSnMmE-WEeUk5Ps1EjBblJbvA';
  // URL置空，则在发送后,点击模板消息会进入一个空白页面（ios）, 或无法点击（android）
  var url = 'http://weixin.qq.com/download';
  var data = {
    first: {
      value: "恭喜你购买成功！",
      "color": "#173177"
    },
    keyword1: {
      value: "巧克力",
      "color": "#173177"
    },
    keyword2: {
      value: "39.8元",
      "color": "#173177"
    },
    keyword3: {
      value: "2014年9月22日",
      "color": "#173177"
    },
    remark: {
      value: "欢迎再次购买！",
      "color": "#173177"
    }
  };
  api.sendTemplate(openid, templateId, url, data, function (err, result) {
    if (err) {
      console.log('err');
    } else {
      console.log(result);
    }
  });
}
sendmessage();

// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxabefe283fbac5f24&redirect_uri=www.baidu.com&response_type=code&scope=SCOPE



