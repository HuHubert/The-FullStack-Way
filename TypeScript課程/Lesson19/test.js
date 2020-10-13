var Database = /** @class */ (function () {
    function Database(dbname) {
        this.dbname = dbname;
    }
    Object.defineProperty(Database.prototype, "name", {
        get: function () {
            return this.dbname;
        },
        set: function (val) {
            this.dbname = val;
        },
        enumerable: false,
        configurable: true
    });
    return Database;
}());
var db = new Database("oracle is good");
console.log(db.name);
db.name = "mysql is good 2";
console.log(db.name);
