interface i1 {
  name: string,
  age: number,
  sex: string,
  sayHello(): void
}

interface i1 {
  grade: number
}

class Interfacei1 implements i1 {
  name: string
  age: number
  sex: string
  grade: number
  sayHello(): void {
    console.log(`hello! my name is ${this.name}`)
  }

}
