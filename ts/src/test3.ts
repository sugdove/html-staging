// 设想这样一个场景：实现一个函数，接收一个数组，返回第一项。利用infer类型推导
type fnc<T extends Array<any>> = () => void
let fncc: fnc<[1, 2, 3]>
fncc = function () {
  return 1
}

interface tt2<T> {
  name: T
}