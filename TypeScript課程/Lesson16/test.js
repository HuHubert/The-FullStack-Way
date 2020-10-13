function add1(vals) {
    var result = 0;
    for (var _i = 0, vals_1 = vals; _i < vals_1.length; _i++) {
        var val = vals_1[_i];
        result += val;
    }
    return result;
}
console.log(add1([1, 2, 3, 4]));
//參數可變長函數定義方法
function add2() {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, vals_2 = vals; _a < vals_2.length; _a++) {
        var val = vals_2[_a];
        result += val;
    }
    return result;
}
console.log(add2(1, 2, 3));
