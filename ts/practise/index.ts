import { m1 } from './m1';
let a: number = 1
console.log(a)
console.log(m1)
let n = new Promise<number>((resolve, reject) => {
  resolve(2)
})
console.log(n, 'nnn')