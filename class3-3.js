/*
node.js從無到有建立網站3-3：新增、修改及刪除MySQL資料
http://hammer1007.blogspot.com/2017/11/nodejs3-3mysql.html

新增
pool.query('insert into 資料表名稱 set ?', [{
    欄位名稱一:欄位值一,
    欄位名稱二:欄位值二,
    ………
}] , function(err, results) {}

修改
pool.query('update 資料表名稱 set ? where 篩選欄位名稱=?', [{
    欄位名稱一:欄位值一,
    欄位名稱二:欄位值二,
    ………
}, 篩選欄位值] , function(err, results) {}
    
刪除
pool.query('delete from 資料表名稱 where 篩選欄位名稱=?', [篩選欄位值] , function(err, results) {}
 */