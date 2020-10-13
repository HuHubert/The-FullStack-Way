class Database{
  protected name: string;

  constructor( name: string){
    this.name = name;
  }

  showInfo(){
    console.log(`您使用的數據庫是： ${this.name}`);
  }
}

class Mysql extends Database {}

let mydb = new Mysql("mysql");
mydb.showInfo();