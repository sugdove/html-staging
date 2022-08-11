const arr = [88, 99, 77, 45, 12, 63, 1, 2, 5, 6, 9, 8, 7, 4, 56, 365, 485, 236]
// sort 排序
function sort1(arr) {
  return arr.sort((p, n) => p - n)
}
// 冒泡排序 O(n(n-1))
function sort2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
// 快排

// 计数排序 O(n+k) 适合数组的最大值和最小值比较接近的 k为最大值-最小值
function sort3(arr) {
  const maxValue = Math.max(...arr)
  const array = new Array(maxValue + 1).fill(0)
  // 入桶
  for (let i = 0; i < arr.length; i++) {
    array[arr[i]] = (array[arr[i]] || 0) + 1
  }
  // 出桶
  const result = []
  for (let i = 0; i < array.length; i++) {
    let cur = array[i]
    while (cur) {
      result.push(i)
      cur--
    }
  }
  return result
}
console.log(sort1(arr))
console.log(sort2(arr))
console.log(sort3(arr))
