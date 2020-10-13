var Database = /** @class */ (function () {
    function Database() {
    }
    Database.connect = function () {
        if (this.dbname)
            console.log(this.dbname + "->連接中");
        else
            console.log("數據庫未指定");
    };
    Database.prototype.showDB = function () {
        console.log("Hi my database");
    };
    return Database;
}());
Database.dbname = "dbtype=Oracle; ip=192.168.1.1;uid=admin;pwd=1234567;";
console.log(Database.dbname);
Database.connect();
