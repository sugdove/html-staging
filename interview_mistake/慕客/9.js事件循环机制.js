setTimeout(function () {
  console.log('4')
})

new Promise(function (resolve) {
  console.log('1')
  resolve()
}).then(function () {
  console.log('3')
})
console.log('2')
// 同步：1 2
// 异步：微任务：3 宏任务:4
