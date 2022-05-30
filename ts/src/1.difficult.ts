// 函数
let d = function (a: number, b: number): number {
  return a + b
}
let dd = (a: number, b: number): number => {
  return a + b
}
let f: (a: number, b: number) => number
f = (a, b) => {
  return a + b
}

// 数组(string[] Arrary<number>) 
let g: string[] = ["a", "b", "c"]
let h: Array<number> = [1, 2, 3]

// 元祖，固定长度的数组
let i: [string, string]

// enum 枚举
enum Gender {
  male = 0,
  feMale = 1
}

let j: { name: string, gender: Gender }
j = {
  name: '孙悟空',
  gender: Gender.male
}

// &表示同时满足 一般用于对象
let k: { name: string } & { age: number }
k = { name: '孙悟空', age: 500 }

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let l: myType
let m: myType