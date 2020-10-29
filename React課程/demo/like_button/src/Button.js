import React, { Component } from 'react';



export default class Button extends Component{
  constructor () {
    super()
  }
  render(){
    return (
      <button type="button">這是一個來自Button.js的Button組件</button>
    )
  }
}

const Nav = function(){
   return (<div>Nav</div>)
}

export {Nav}