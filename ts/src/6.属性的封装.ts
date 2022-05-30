class Person3 {
  /*  TS可以在属性前添加属性修饰符
      public 代表共有属性可以任意位置修改默认值
      private 代表私有属性，只能在类的内部进行修改
              可以在类中添加方方法使得私有属性被外部访问
      protected 只能在类或者子类进行访问
  */
  public name: string
  private age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  getAge(): number {
    return this.age
  }
  setAge(age: number): void {
    if (age > 0) {
      this.age = age
    }
  }
  // get age(): number {
  //   return this.age
  // }
  // set age(age: number): void {
  //   if (age > 0) {
  //     this.age = age
  //   }
  // }
}

const p3 = new Person3('suge', 28)
// p3.age = 12 // private表示私有属性不能被外部修改 和访问
// console.log(p3.age)
p3.setAge(-12)
console.log(p3.getAge())