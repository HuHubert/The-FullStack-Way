import logo from './logo.svg';
import './App.css';
import add , {jian} from'./add'


// console.log(logo);
// console.log(add(3,5));
// console.log(jian(5,6));

/*ES5
var Animal = function(){
  this.type = 'animal'
 }

var Human = function (height){

  this.height = height
}
Human.prototype = new Animal()

console.log(new Human(180))
*/

class Animal {
  constructor(){
    this.type = 'animal'
  }
}

class Human extends Animal {
  constructor(height){
    super()
    this.height = height
  }
}


console.log(
  new Human(190)
)




function App() {  
  var name = "小明"
  var arr = [1,2,3,4,5]
  // const app = <div>this is app</div>

  // return (<div>this is app</div>)

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 style = {name === "小明" ? {color: "red"} : {color: "green"}}>J是我的第一行React代碼呀！！！！</h2>
        {/* js: {name}
        html: name */}

        js : {name === '小明' ? '這是小明' : '這不是小明'}


        {
          arr.map((v,k)=>{
            return <li>{v}</li>
          })
        }

        {/* 這是一個註解 js */}


        <h4>這是jsx</h4>
        <label htmlFor="input">
          <h2>輸入</h2>
          <input type="text" id="input"/>
        </label>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;




