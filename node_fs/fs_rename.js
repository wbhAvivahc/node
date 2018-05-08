
const fs = require('fs');

fs.rename('./fs.text','./biubiu.js', (err) => {
  if(err) throw err;
  console.log('success')
})