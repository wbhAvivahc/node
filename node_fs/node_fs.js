
const fs = require('fs');

fs.unlink('./fs.text', (err) => {
  if(err) throw err;
  console.log('success')
})