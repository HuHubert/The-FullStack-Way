class Database{

dbname:string;

constructor (dbname:string){
  this.dbname = dbname;
}

//外部調用
public showDB(){

console.log(`數據庫：${this.dbname}`);

}

//本類和子類別調用
protected connect(){

  console.log(`${this.dbname}`,"連接中...");
}

//本類調用
private disconnect(){

console.log(`${this.dbname})`,"關閉中....");


}

}


let oracle = new Database("Oracle 甲骨文");
oracle.showDB();

// oracle.connect();
// oracle.disconnect();


class PostgreSql extends Database {

public doIt(){

super.connect();

}

}

let postgres = new PostgreSql("postgresql小象");

postgres.showDB();

postgres.doIt();