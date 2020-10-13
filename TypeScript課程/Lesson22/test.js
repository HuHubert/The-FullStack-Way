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
    function Database(name) {
        this.name = name;
    }
    Database.prototype.showInfo = function () {
        console.log("\u60A8\u4F7F\u7528\u7684\u6578\u64DA\u5EAB\u662F\uFF1A " + this.name);
    };
    return Database;
}());
var Mysql = /** @class */ (function (_super) {
    __extends(Mysql, _super);
    function Mysql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mysql;
}(Database));
var mydb = new Mysql("mysql");
mydb.showInfo();
