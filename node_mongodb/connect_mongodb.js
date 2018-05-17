const mongoose = require('mongoose');

const url = 'mongodb://localhost/biu';

mongoose.connect(url,function(err){
  if(err){
    console.log('connect failed');
    console.log(err);
    return
  };

  console.log('connect success!')
});

const arrticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  publishTime: Number
});

mongoose.model('arrticle',arrticleSchema);

const _new = mongoose.model('arrticle');
var art = new _new({
  title: 'String',
  author: 'String',
  content: 'String',
  publishTime: 123
})

art.save(function(err){
  if(err){
    console.log('save failed!!');
    console.log(err);
  }else {
    console.log('save successed!!!!!')
  }
})