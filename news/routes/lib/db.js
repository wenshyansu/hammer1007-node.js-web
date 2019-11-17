var mysql = require('mysql');

var pool = mysql.createPool({
    user : 'admin',
    passwprd : 'admin',
    host : 'localhost',
    database : 'news',
    waitForConnections : true,
    connectionLimit : 10
});