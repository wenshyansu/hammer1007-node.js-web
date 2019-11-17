var mysql = require('mysql');
// 建立資料庫連線
var pool  = mysql.createPool({
    user: 'root',
    password: '1qaz2wsx',
    host: 'localhost',
    database: 'news', 
    waitForConnections : true, 
    connectionLimit : 10       
});

module.exports = pool;