import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'
import Demo from './Demo'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isRenderTest: true
    }
  }

  render(){    
    return (
    <div>
      {/* {this.state.isRenderTest ? <Test></Test> : "不渲染Test"} */}

        {this.state.isRenderTest ? <Demo></Demo> : "不渲染Demo"}

    
    <p>App</p>
    <button type="button" onClick={()=>this.setState({})}>App setState</button>
    {/* <button type="button" onClick={()=>{this.setState({isRenderTest:!this.state.isRenderTest})}}>切換Test渲染</button>     */}
        <button type="button" onClick={()=>{this.setState({isRenderTest:!this.state.isRenderTest})}}>切換Demo渲染</button>    
    </div>
    
  );
}

}

export default App;
