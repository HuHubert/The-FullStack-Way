import React, { Component } from 'react'

export default class Demo extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps(){
    //函數返回結果將會被添加到state添加/更新state的內容
    //null state不需要任何改變
    console.log('靜態生命週期函數')
    return null
  }

  getSnapshotBeforeUpdate(){
    console.log('更新前獲取快照')
    return "from update"
  }
  render(){
    return (<div>
      <p>Demo</p>
      <button type="button" onClick={()=>this.setState({})}>setState</button>
      </div>)
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }
  componentDidUpdate(prevProps, prevState,info){
    console.log('componentDidUpdate')
    console.log('info')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
}