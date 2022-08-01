// 循环打印红黄绿

// 红灯三秒后变成绿灯
// 绿灯五秒后变成黄灯
// 黄灯两秒后变成红灯

function red() {
  return new Promise((resolve) => {
    console.log('我是红灯,3秒后变成绿灯')
    setTimeout(() => {
      resolve(green())
    }, 3000)
  })
}

function green() {
  return new Promise((resolve) => {
    console.log('我是绿灯,5秒后变成黄灯')
    setTimeout(() => {
      resolve(yellow())
    }, 5000)
  })
}

function yellow() {
  return new Promise((resolve) => {
    console.log('我是黄灯,2秒后变成绿灯')
    setTimeout(() => {
      resolve(red())
    }, 2000)
  })
}

// red()

function step(color, delay, nextColor) {
  return new Promise((resolve) => {
    console.log(`我是${color}灯,${delay}秒后变成${nextColor}灯`)
    setTimeout(() => {
      resolve()
    }, delay * 1000)
  })
}

async function light() {
  await step('红', 3, '绿')
  await step('绿', 5, '黄')
  await step('黄', 2, '红')
  await light()
}

light()
