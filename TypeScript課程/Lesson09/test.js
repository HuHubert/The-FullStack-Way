//enum name {name1, name2,name3,.....}
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex || (Sex = {}));
var member_Sex = Sex.FEMALE;
//初值＝FEMALE
console.log(member_Sex);
console.log(Sex[member_Sex]);
// 多+號變成數值型
// switch (+member_Sex) {
//   case Sex.MALE:
//     console.log("男")
//     break
//   case Sex.FEMALE:
//     console.log("女")
//     break
//   case Sex.UNKNOWN:
//     console.log("不明")
//     break
// }
console.log(checkSex(member_Sex));
function checkSex(sex) {
    var result = "";
    switch (sex) {
        case Sex.MALE:
            result = "男";
            break;
        case Sex.FEMALE:
            result = "女";
            break;
        case Sex.UNKNOWN:
            result = "不明";
            break;
    }
    return result;
}
