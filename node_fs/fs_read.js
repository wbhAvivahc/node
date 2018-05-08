
const fs = require('fs');

fs.open('./fs.text','r',function(err,fd){
  var readBuffer = new Buffer(10);
  var offset = 0;
  var len = readBuffer.length;
  var filePosition = 2;
  fs.read(fd,readBuffer,offset,len,filePosition,function(err,readByte){
    console.log('数据总数',readByte,readBuffer)
    // console.log('数据总数',readByte)
    console.log(readBuffer.slice(0, readByte))
  })
  
})

fs.readFile('./fs.text',function(err,data){
  if(err){
    throw err;
  }else {
    console.log(data,'boom')
  }
})