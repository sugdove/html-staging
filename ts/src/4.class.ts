// basic
class Person {
  name: string = '孙悟空'
  readonly age: number = 18
  static readonly sex = '男'
  sayHello() {
    console.log(`hello, my name is ${this.name}`)
  }
}

const p = new Person()
// p.age = 3
// Person.sex = '女'
console.log(p.name)
console.log(p.age)
console.log(Person.sex)
p.sayHello()

// constructor
class Person2 {
  name: string
  age: number
  static readonly sex = '男'
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sayHello() {
    console.log(`hello, my name is ${this.name}`)
  }
}

const p2 = new Person2('suge', 18)
// p.age = 3
// Person.sex = '女'
console.log(p2.name)
console.log(p2.age)
console.log(Person2.sex)
p2.sayHello()