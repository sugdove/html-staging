// 接口之前如何定义一个对象的类型
type myType2 = {
  name: string,
  age: number,
  // [PropName: string]: any
}
// 定义两个报错
// type myType2;
// 接口： 用来定义一个类结构, 用来定义一个类中应该包含哪些属性和方法
//        同时接口也可以当成类型声明去使用
// 总结不同点：1. 接口可以多次定义 2.接口可以用于定义类

interface myInterface {
  name: string,
  age: number,
  sayHello(): void,
  // [PropName: string]: any
}
// 可多次定义
interface myInterface {
  sex: string
}

let test: myInterface = {
  name: 'test',
  age: 11,
  sex: '男',
  sayHello(): void {
    console.log('hello')
  }
}

// 可用于类的实现
class InterfaceClass implements myInterface {
  name: string
  age: number
  sayHello(): void {
    console.log('hello')
  }
  sex: string
}