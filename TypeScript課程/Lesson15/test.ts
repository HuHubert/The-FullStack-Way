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

function sayHello(name: string = "koma"):string {

return "Hello " + name + ".";

}

console.log(sayHello("Trump"));
console.log(sayHello());