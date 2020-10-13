// namespace ns_name{
//   export class class_name {}
//   export function func_name {}
//   export namespace ns_name {}
// }

namespace com.komavideo{

  //導出類
  export class KVUser {

    constructor() {}

    sayHello(){
      console.log("Hi, my dear!");
    }

  }

  //導出函數
  export function showVer(){
    console.log("version is 1.0");
  }

 //嵌套子名稱空間
 export namespace util {
  export class MyDataBase{
    private dbname : string;
    constructor(dbname: string){
      this.dbname = dbname;
    }
    showMe(){

      console.log(this.dbname + "is good.");
    }


  }

 }

}

let user = new com.komavideo.KVUser();
user.sayHello();