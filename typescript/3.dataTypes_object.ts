// 复杂数据类型 object 一般不直接使用 函数和{}都是object
let a_3: object
a_3 = function () { }
a_3 = {}

// 如何用ts规范对象 加? 表示可选属性 [propName: string]: any 表示任意类型的属性
let b_3: { param_1: string, param_2?: number, [propName: string]: any }

// let c_3 = 