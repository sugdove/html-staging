// 函数柯里化 function  sum(a)(b)(c)(d) = a+b+c+d
function sum(...args) {
  let result = 0
  function add(...args) {
    if (args.length > 0) {
      result += args.reduce((pre, current) => {
        return pre + current
      })
      return add
    } else {
      return result
    }
  }
  if (args.length > 0) {
    return add
  } else {
    return result
  }
}
console.log(sum(1)(2)())

function nn() {
  return nn
}
nn()()()()
