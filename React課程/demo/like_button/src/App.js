import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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


      <button type="button" style={this.state.like ? {color: "red"}:{color:"black"}}
      onClick={() => this.handleClick()}
      >

      {
        this.state.like ? "已讚" : "不喜歡"
      }


      </button>
    
      )
  }
}

export default App;
