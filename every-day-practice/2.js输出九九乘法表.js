// js输出九九乘法表

// 正三角
// 1 * 1 = 1
// 1 * 2 = 2   2 * 2 = 4
// 1 * 3 = 3   2 * 3 = 6    3 * 3 = 9

function nineXnine() {
  let resultArr = []
  let result = ''
  for (let i = 1; i <= 9; i++) {
    let strArr = []
    let str = ''
    for (let j = 1; j <= i; j++) {
      j_str = `${j * i}`.length === 1 ? `${j * i} ` : `${j * i}`
      strArr.push(`${j} * ${i} = ${j_str}`)
    }
    str = strArr.join('    ')
    resultArr.push(str)
  }
  result = resultArr.join('\n')
  return result
}
console.log(nineXnine())
