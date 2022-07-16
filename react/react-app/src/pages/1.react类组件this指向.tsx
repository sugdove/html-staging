import React, { Component } from 'react'
import { obj } from '../types/Object'
export default class Part1 extends Component {
  constructor(props: obj) {
    super(props)
    // this.handleClick = this.handleClick.bind(this)
  }
  // handleClick() {
  //   console.log(this)
  // }
  handleClick = () => {
    console.log(this)
  }
  render() {
    return <button onClick={this.handleClick}>Part1</button>
  }
}
