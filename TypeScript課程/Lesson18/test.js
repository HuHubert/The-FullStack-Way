var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Database = /** @class */ (function () {
    function Database(dbname) {
        this.dbname = dbname;
    }
    //外部調用
    Database.prototype.showDB = function () {
        console.log("\u6578\u64DA\u5EAB\uFF1A" + this.dbname);
    };
    //本類和子類別調用
    Database.prototype.connect = function () {
        console.log("" + this.dbname, "連接中...");
    };
    //本類調用
    Database.prototype.disconnect = function () {
        console.log(this.dbname + ")", "關閉中....");
    };
    return Database;
}());
var oracle = new Database("Oracle 甲骨文");
oracle.showDB();
// oracle.connect();
// oracle.disconnect();
var PostgreSql = /** @class */ (function (_super) {
    __extends(PostgreSql, _super);
    function PostgreSql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostgreSql.prototype.doIt = function () {
        _super.prototype.connect.call(this);
    };
    return PostgreSql;
}(Database));
var postgres = new PostgreSql("postgresql小象");
postgres.showDB();
postgres.doIt();
