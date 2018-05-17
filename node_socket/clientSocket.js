
const net = require('net');

const client = new net.Socket();

client.connect(5555,'127.0.0.1', function(){
  console.log('connect the server')

  client.write('message from client')
});

client.on('data', function(data){
  console.log(data,'怎么回事')
})

client.on('end',function(){
  console.log('client is end')
});
