function add (x: number, y: number) : number{

  return x + y;
}

console.log(add(10,5));


function multiply (x: number, y: number){

return x * y;

}

console.log(multiply(10,5));

let fun_add = add;
let fun_mult = multiply;
console.log(fun_add(10,5));
console.log(fun_mult(10,5));