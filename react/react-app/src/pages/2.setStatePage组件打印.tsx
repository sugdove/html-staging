// import React, { useState, useEffect, useLayoutEffect } from 'react'
// export default function Part2() {
//   const [count, setCount] = useState(-1)
//   useEffect(() => {
//     setCount(0)
//   })
//   useLayoutEffect(() => {
//     console.log(11)
//   })
//   console.log('render')
//   return (
//     <div>
//       <h1>setStatePage</h1>
//       <button>{count}</button>
//     </div>
//   )
// }
import React, { Component } from 'react'

export default class Part2 extends Component {
  render() {
    console.log('render')
    return <div>Part2</div>
  }
}
