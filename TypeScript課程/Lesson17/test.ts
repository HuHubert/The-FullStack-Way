// class className {

//   property_name1 : type;
//   property_name2 : type;

//   //....
  
//   constructor(param1: type, param2: type,....)
//   {
//     //構造函數內容

//   }

//   //類方法
//   mothod(param1: type, param2: type,....)
  
//   :returns_type{

//     //函數內容

//   }
//   //method2,method3...


// }

class person{

  name:string;
  sex:number;
constructor(name:string, sex:number){

  //傳進來的name參數賦給模板級的this.name變數
  this.name = name;
  this.sex = sex;


}

sayHello(){



  console.log(`${this.name},你好! ${this.sex}`);
}


}

let koma = new person("小馬",1);
koma.sayHello();

console.log(koma.name);
console.log(koma.sex);