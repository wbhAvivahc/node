
const fs = require('fs');

const request = require('request');

const qs = require('querystring');

function readIp(path,callback){
  fs.readFile('./ip.json',(err,data)=>{
    if(err) {
      throw err;
    }else {
      try {
        data = JSON.parse(data);
        callback(null,data);
      }catch {
        callback(error);        
      }
    }
  })

}