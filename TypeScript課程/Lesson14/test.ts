//(param:type,....):return_type => {函數內容}

function add(x: number, y: number): number{
  return x + y;
}

console.log(add(10,5));



let fun_add = (x: number, y: number): number => {
  return x + y;
}

console.log(fun_add(100,50));