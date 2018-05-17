
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '180.76.100.134',
  user: 'wbh',
  password: 'wangbinghan',
  // database: 'avivahc'
})

connection.connect(function(err){
  
  if(err){
    console.error('error');
    return;
  };

  console.log('connect success');
});

// connection.query('SELECT * FROM avivahc_table WHERE student_id="123"', function(err,rows){
//   if(err){
//     console.log(err);
//   }else {
//     console.log(rows,'rows')
//   }
// })