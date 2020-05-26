import mysql from 'mysql';

// 1. create a connection with a config object
// const connection = mysql.createConnection({
//   host: 'localhost',    //数据库地址
//   user: 'root',         //连接数据库的用户名
//   password: '123456',  //连接数据库的密码
//   database: 'lk_data'   //数据库名
// });
// 2. create a connection with a url string
const connection = mysql.createConnection('mysql://root:123456@localhost/lk_data?debug=true&charset=utf8&timezone=+0800');

module.exports = connection;
