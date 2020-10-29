import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button,{Nav} from './Button'




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

     this.state = {
       like : false
     }

   }

   handleClick(){
     this.setState({
       like : !this.state.like
     })
   }


  render() {

    console.log("render函數觸發了")
    return (
      
      <div>

      <Nav/>

      <Button></Button>
      <Button></Button>
      <Button></Button>

     <button type="button" style={this.state.like ? {color: "red"}:{color:"black"}}
      onClick={() => this.handleClick()}
      >

      {
        this.state.like ? "已讚" : "不喜歡"
      }


      </button>

      </div>



    
      )
  }
}

export default App;
