import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {

  constructor(props) {
    super(props);
  }

  handleClick(color) {
    console.log(color);

    this.setState({
      themeColor : color
    })
  }

  render(){

    

    var themeColor = this.props.themeColor
    return(
      <div >
        <button style={{color : themeColor}} onClick={()=>this.props.handleClick("red")}>紅色</button>
        <button style={{color : themeColor}} onClick={()=>this.props.handleClick("green")}>綠色</button>
      </div>
    )
  }
}

class Title extends Component{
  constructor(){
    super()

  }
  render(){
    const themeColor = this.props.themeColor
    return (
      <h2 style={{color : themeColor}}>標題</h2>
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      themeColor:'red'
    }
  }

  handleClick(color) {
    this.setState({
      themeColor: color
    })
  }
  
render(){
  return (

    <div>

    <h5>App</h5>
    <Title themeColor={this.state.themeColor}></Title>
    <Button themeColor={this.state.themeColor} handleClick={(color)=>this.handleClick(color)}></Button>


    </div>

  );
}

}


export default App;
