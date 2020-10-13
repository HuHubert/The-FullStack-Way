// namespace ns_name{
//   export class class_name {}
//   export function func_name {}
//   export namespace ns_name {}
// }
var com;
(function (com) {
    var komavideo;
    (function (komavideo) {
        //導出類
        var KVUser = /** @class */ (function () {
            function KVUser() {
            }
            KVUser.prototype.sayHello = function () {
                console.log("Hi, my dear!");
            };
            return KVUser;
        }());
        komavideo.KVUser = KVUser;
        //導出函數
        function showVer() {
            console.log("version is 1.0");
        }
        komavideo.showVer = showVer;
        //嵌套子名稱空間
        var util;
        (function (util) {
            var MyDataBase = /** @class */ (function () {
                function MyDataBase(dbname) {
                    this.dbname = dbname;
                }
                MyDataBase.prototype.showMe = function () {
                    console.log(this.dbname + "is good.");
                };
                return MyDataBase;
            }());
            util.MyDataBase = MyDataBase;
        })(util = komavideo.util || (komavideo.util = {}));
    })(komavideo = com.komavideo || (com.komavideo = {}));
})(com || (com = {}));
var user = new com.komavideo.KVUser();
user.sayHello();
