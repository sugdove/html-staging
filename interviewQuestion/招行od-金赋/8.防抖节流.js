防抖：在有限时间连续点击不会触发  按钮连续点击 只会触发一次
节流：是在固定时间之后才可以触发  滚动调用接口 固定间隔时间调用
function debounce(callback, delay) {
  let timer = null
  return function(event) {
   if(timer) clearInterval(timer)
   timer = setInterval(callback.bind(this, event), delay)
  }
}

function throttle(callback, delay) {
  let time = 0
  return function(event) {
    if(Date.now() - time > delay) {
      callback.call(this, event)
      time = Date.now()
    }
  }
}


