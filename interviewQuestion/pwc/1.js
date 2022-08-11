function fn(arr) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.delete(arr[i])
    } else {
      map.set(arr[i], 0)
    }
  }
}

// 257瓶水  其中有一瓶是毒药 小白鼠喝了一个小时死亡 最少小白鼠一个小时内找到 排列组合
function mes() {
  return true
}
// 业务逻辑多
function getResultDate(date) {
  let a = 1

  let dayCount = 1
  while (a < 11) {
    if (mes(date + dayCount * 24 * 3600)) {
      a++
    }
    dayCount++
  }
  return date + dayCount * 24 * 3600
}
