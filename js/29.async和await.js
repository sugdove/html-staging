function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.random()), delay)
  })
}

async function main() {
  console.log('开始')
  await sleep(2000)
  console.log('结束')
}

// main()

function test(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.random()), delay)
  })
}
// 为何async await 不能取代promise(有一些需求需要多个异步操作同时进行然后全部成功后做响应处理)
async function demo1() {
  console.log(await test(2000))
  console.log(await test(2000))
  console.log(await test(2000))
}

// demo1()

async function demo2() {
  const arr = []
  for (let i = 0; i < 3; i++) {
    arr.push(sleep(2000))
  }
  const result = await Promise.all(arr)
  console.log(result)
}
demo1()
// demo2()
