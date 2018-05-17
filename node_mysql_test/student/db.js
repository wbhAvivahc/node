const mysql = require('mysql');

const DBConfig = {
  host : 'localhost',
  user: 'root',
  password: '',
  database: 'avivahc',
  multipleStatements: true
};

const DBconnection = mysql.createConnection(
  DBConfig
);

//链接数据库
DBconnection.connect();

module.exports = {
  DBconnection
}


