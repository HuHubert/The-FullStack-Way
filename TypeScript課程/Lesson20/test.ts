class Database {

  public static dbname : string;

  constructor(){

  }

  public static connect(){
    
    if (this.dbname)
    console.log(this.dbname + "->連接中");
    else
    console.log("數據庫未指定");

  }

  public showDB(){

    console.log("Hi my database");
  }


}

Database.dbname = "dbtype=Oracle; ip=192.168.1.1;uid=admin;pwd=1234567;"
console.log(Database.dbname);
Database.connect();