import React, { Component } from 'react';

export default class Test extends Component {

  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      time : new Date()
    }
    
  }

  tick() {
    this.setState({ 
      time : new Date()
    })
  }



  //加載
  componentWillMount(){
    console.log('組件將要加載 componentWillMount')
    this.timeId=setInterval(()=>this.tick(),1000)

  }
  componentDidMount(){
    console.log('組件已經加載 componentDidMount')
  }


  //更新生命週期
  componentWillReceiveProps(){
    console.log('組件將要接收參數 componentWillReceiveProps')
  }

  shouldComponentUpdate(){
    console.log('組件是否應該更新')
    return true
  }
  componentWillUpdate(){
    console.log('組件將要更新 componentWillUpdate')
  }

  // getSnapshotBeforeUpdate(){
  //   console.log('在更新前獲取截圖')
  // }

  componentDidUpdate(){
    console.log('組件已經更新完畢')
  }

  //卸載
  componentWillUnmount(){
    console.log('組件將要卸載 componentWillUnmount')
    clearInterval(this.timeId)
  }

  render(){
    console.log("render")
    return(
      <div style={{border: '1px solid black'}}>
        <p>Test</p> 
        <p>{this.state.time.getSeconds()}</p> 
        <button type="button" onClick={()=>this.setState({})}>setState更新</button>
        <button type="button" onClick={()=>this.forceUpdate()}>forceUpdate更新</button>
      </div>
    )
  }

}


//組件有兩種更新方式 setState forceUpdate
//組件會聽父組件的更新而更新