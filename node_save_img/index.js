
const request = require('request');

const path = require('path');

const config = require('./config');

const analyze = require('./analyze');

const fs = require('fs');

function start(){
  request(config.url,function(err,res,body){
    if(!err && res){
      analyze.findImg(body,downLoad)
    }
  })
};

function downLoad(imgUrl,i){
  // request(imgUrl,(res){
  //   console.log(res)
  // })
  request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir,i+'.jpeg'),{
    'encoding': 'utf8'
  }))
  // console.log(i,ext,imgUrl,'extttttt')
}

start()
