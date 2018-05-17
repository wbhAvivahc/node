
const net = require('net');

//创建一个服务
const server = net.createServer(function(socket){
  
  //像客服端发送数据
  socket.write(JSON.stringify({a:1}),function(){
    console.log('server is 发送数据了!');
  })

  //设置连接服务器最大数量
  server.maxConnections = 1;

  //连接服务器的客户端数量
  server.getConnections(function(err,num){
    console.log(num,'num');
  })

  //监听data事件
  socket.on('data',function(data){
    console.log(data.toString(),'form client data');
    const readSize = socket.bytesRead;
    console.log('the size of data is ' + readSize);
  })

}).listen(5555);

//监听有设备连接了
server.on('connection',function() {
  console.log('server is connections');
});

//服务器已经启动
server.on('listening',function() {
  console.log('server is listening')
});

//
server.on('error',function () {
  console.log('server is error');
});

server.on('close',function(){
  console.log('socket is close')
})

//tcp服务器监听地址信息
const address = server.address();





