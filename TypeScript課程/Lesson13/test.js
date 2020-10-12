function add(x, y) {
    return x + y;
}
console.log(add(10, 5));
function multiply(x, y) {
    return x * y;
}
console.log(multiply(10, 5));
var fun_add = add;
var fun_mult = multiply;
console.log(fun_add(10, 5));
console.log(fun_mult(10, 5));
