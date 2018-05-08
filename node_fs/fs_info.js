
const fs = require('fs');

fs.stat('./fs.text', (err,stats) => {
  if(err) throw err;
  console.log('state',stats)
}) 