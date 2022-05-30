// number string boolean 字面量 any unknown void never

// 字面量用法 可用联合类型 | 用法少
let sex: 'male' | 'female'
sex = 'male'
sex = 'female'

// any 表示是任意类型 (不加any会隐式添加any)
let data: any = { data: [] }

sex = data // 会赋值给任意变量（会影响其他变量）

// unknown 未知类型的值（与any的区别：不能赋值给其他类型不同变量）
let un: unknown;
// 什么情况下能将un作为值：
// 方式一（判断）
if (un === 'male' || un === 'female') {
  sex = un
}
// 方式二（断言 <> or as）
sex = un as 'male' | 'female'
sex = <'male' | 'female'>un

// void and never 都是用作函数返回值void表示undefined never表示永远没有返回东西（例如throw抛出错误：用的很少）
function voi(): void {
  console.log(111)
}
function nev(): never {
  throw new Error('123')
}