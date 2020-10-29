import React, { Component } from 'react';



export default class Button extends Component{
  constructor () {
    super()
  }
  render(){
    console.log("Button組件更新")
    return (
      <button type="button">{this.props.name}</button>
    )
  }
}
//函數的組件
const Nav = function(props) {
   return (<div style={{color:"white",backgroundColor:'black'}}>Nav
   {props.title}
   {props.children}
   </div>)
}

export {Nav}