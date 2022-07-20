function transform(num, char = ',', length = 3) {
  const arr = num.toString().split('.')
  let result = ''
  let int = arr[0]
  let decmial = arr[1] ? '.' + arr[1] : ''
  while (int.length > length) {
    result = char + int.slice(-length) + result
    int = int.slice(0, int.length - length)
  }
  if (int) result = int + result
  return result + decmial
}
function transform2(num) {
  return num.toLocaleString()
}
