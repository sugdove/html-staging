// 防抖 1.this绑定2.传参问题 按钮点击事件可以传参
function debounce(callback, delay, isRunNow = true) {
  let timer = 0
  return function (...args) {
    if (timer === 0 && isRunNow) {
      callback.call(this, ...args)
      timer = null
    } else {
      if (timer) clearInterval(timer)
      timer = setInterval(callback.bind(this, ...args), delay)
    }
  }
}

// 节流
function throttle(callback, delay) {
  let time = 0
  return function (...args) {
    if (Date.now() - time > delay) {
      callback.call(this, ...args)
      time = Date.now()
    }
  }
}
