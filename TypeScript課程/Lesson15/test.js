// function sayHello(name?: string ): string{
//   if (name === undefined){
//     return "Hello Koma.";
//   }
//   else
//   {
//     return "Hello " + name + ".";
//   }
// }
// console.log(sayHello("Trump"));
// console.log(sayHello());
function sayHello(name) {
    if (name === void 0) { name = "koma"; }
    return "Hello " + name + ".";
}
console.log(sayHello("Trump"));
console.log(sayHello());
