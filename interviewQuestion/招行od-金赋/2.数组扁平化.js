function flatten(arr) {
  return arr.flat(Infinity)
}
function pushFn(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i])
    } else {
      pushFn(arr[i])
    }
  }
}
function flatten2(arr) {
  pushFn(arr)
  return result
}

console.log(flatten2([1, 2, [3, [4, [5]]]]))
