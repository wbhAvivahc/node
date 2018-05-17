
const http = require('http');

const fs = require('fs')

const server = http.createServer(function(req,res){
  //设置相应头部
  res.writeHead(200,{
    'content-type': 'text/html'
  })

  //读取文件
  fs.readFile('./index.html',function(err,fd){
    console.log(fd.toString(),'string')
    if(err){
      throw err
    }else {

      //相应数据
      res.write(fd);

      //设置返回数据
      res.end();
    }
  });



  
}).listen(5432)