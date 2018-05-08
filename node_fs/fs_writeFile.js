
const fs = require('fs');

fs.appendFile('./fs.text','data to append','utf8', function(err){
  if(err) throw err;
});

fs.appendFile('./fs.text', 'data to append123', (err) => {
  if(err) throw err;
  
})
