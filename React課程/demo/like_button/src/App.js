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


      <Input></Input>

      </div>



    
      )
  }
}

export default App;
