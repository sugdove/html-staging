/* 
  在定义函数或者类时, 如果类型不明确就可以使用泛型
*/

function fn<T>(a: T): T {
  return a
}

let result = fn(1)
let result2 = fn('2')

function fn2<T, F>(a: T, b: F): T {
  console.log(b)
  return a
}

let result3 = fn2(1, '2')

interface interface2 {
  name: string,
  age: number,
}

function fn3<T extends interface2>(a: T): number {
  return a.age
}

let result4 = fn3({ name: 'suge', age: 20 })

class Myclass<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}

const mn = new Myclass<string>('suge')

console.log(mn)