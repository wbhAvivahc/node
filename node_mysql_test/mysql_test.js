const express = require('express');

const app = express();

app.get('/',function(req,res){
  res.status(500)
  res.send('HELLO WORLD！！');
})

const server = app.listen(8081,function(){
  const host = server.address().address;
  const port = server.address().port;

  console.log('boom',host,port)
})