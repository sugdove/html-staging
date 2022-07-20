import { useEffect, useState } from 'react'
export default function Part3() {
  const [count, setCount] = useState(-1)
  console.log('render')
  useEffect(() => {
    console.log(111)
  })
  return <h1>count: {count}</h1>
}
