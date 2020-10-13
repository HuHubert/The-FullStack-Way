interface IDatabase {

  connect():void;
  close():void;
  exsql(sql:string):number;
}

class Oracle implements IDatabase {

  connect(){
    console.log("[Oracle]數據庫連接");
  }

  close(){
    console.log("[Oracle]數據庫關閉");
  }

  exsql(sql:string){
    console.log("[Oracle]sql執行成功");
    return 0;
  }
}

// let mydb:IDatabase = new Oracle();
// mydb.connect();
// mydb.exsql("select * from table1");
// mydb.close();


class PostgreSQL implements IDatabase {

  connect(){
    console.log("[PostgreSQL]數據庫連接");
  }

  close(){
    console.log("[PostgreSQL]數據庫關閉");
  }

  exsql(sql:string){
    console.log("[PostgreSQL]sql執行成功");
    return 0;
  }
}

// mydb = new PostgreSQL();
// mydb.connect();
// mydb.exsql("select * from table1");
// mydb.close();


//接口參數
function doIt(db:IDatabase){

  db.connect();
  db.exsql("update....");
  db.close();

}

let oracle:IDatabase = new Oracle();
let pgsql:IDatabase = new PostgreSQL();

doIt(oracle);
doIt(pgsql);