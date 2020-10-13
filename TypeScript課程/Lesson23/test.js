var Oracle = /** @class */ (function () {
    function Oracle() {
    }
    Oracle.prototype.connect = function () {
        console.log("[Oracle]數據庫連接");
    };
    Oracle.prototype.close = function () {
        console.log("[Oracle]數據庫關閉");
    };
    Oracle.prototype.exsql = function (sql) {
        console.log("[Oracle]sql執行成功");
        return 0;
    };
    return Oracle;
}());
// let mydb:IDatabase = new Oracle();
// mydb.connect();
// mydb.exsql("select * from table1");
// mydb.close();
var PostgreSQL = /** @class */ (function () {
    function PostgreSQL() {
    }
    PostgreSQL.prototype.connect = function () {
        console.log("[PostgreSQL]數據庫連接");
    };
    PostgreSQL.prototype.close = function () {
        console.log("[PostgreSQL]數據庫關閉");
    };
    PostgreSQL.prototype.exsql = function (sql) {
        console.log("[PostgreSQL]sql執行成功");
        return 0;
    };
    return PostgreSQL;
}());
// mydb = new PostgreSQL();
// mydb.connect();
// mydb.exsql("select * from table1");
// mydb.close();
//接口參數
function doIt(db) {
    db.connect();
    db.exsql("update....");
    db.close();
}
var oracle = new Oracle();
var pgsql = new PostgreSQL();
doIt(oracle);
doIt(pgsql);
