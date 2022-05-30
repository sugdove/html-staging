// 继承的好处 OCP 开闭原则：对扩展开放, 对修改关闭
class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  barking(): void {
    console.log(`动物在叫~`)
  }
}

class Dog extends Animal {
  // 方法重写
  sex: string
  constructor(name: string, age: number, sex: string) {
    super(name, age)
    this.sex = sex
  }
  barking(): void {
    // super.barking()
    console.log(`汪汪汪~`)
  }
}

const animal = new Animal('动物', 5)
const dog = new Dog('小白', 5, '男')

animal.barking()
dog.barking()

console.log(animal)
console.log(dog)