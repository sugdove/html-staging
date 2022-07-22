class Factory {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
}

class Toys extends Factory {
  constructor(name, age) {
    super(name, age)
  }
}
console.log(new Toys('suge', 28, '男'))
