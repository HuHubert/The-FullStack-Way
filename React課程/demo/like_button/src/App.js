import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button,{Nav} from './Button'
import Input from './input'



// //class方法
// class Nav extends Component {
//   constructor() {
//     super()
//   }

//   render(){
//     return (
//       <div style={{color: 'white', backgroundColor:'black'}}>Skipper</div>
//     )
//   }
// }


// //函數方法
// const Button = function(){
//   return (
//     <button type="button">來自Buttony組件
//     </button>
//   )
// }



 class App extends React.Component {
   constructor (){
     super()

    //  this.state = {
    //    like : false
    //  }

    //綁定this作用域
    // this.handleClick.bind(this)

   }

   handleClick(){
    //  this.setState({
    //    like : !this.state.like
    //  })
    console.log("你在調用handleClick事件")
   }


  render() {

    console.log("render函數觸發了")
    console.log("App組件更新")
    return (
      
      <div>

      {/* <Nav/>

      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>

     <button type="button" style={this.state.like ? {color: "red"}:{color:"black"}}
      onClick={() => this.handleClick()}
      >

      {
        this.state.like ? "已讚" : "不喜歡"
      }


      </button> */}

      {/* <p onClick={function() {console.log(this)}}>點擊看this</p> */}



      {/* //綁定this作用域
      <p onClick={this.handleClick}>點擊看this</p> */}

      {/* <p onClick={()=>this.handleClick()}>點擊看this</p> */}


      {/* <Input></Input>
      <Button></Button>
      <Nav></Nav>

      <p onClick={()=>this.setState({})}>點擊更新App組件</p> */}

      <hr/>
      <Nav title={"標題"}>
        <h3>這是一個傳遞的children</h3>
        <h3>這是一個傳遞的children 2</h3>
        <Button name="點擊一下你就上天"></Button>
        <Button name="點擊一下百度一下"></Button>
      </Nav>

      </div>



    
      )
  }
}

export default App;
