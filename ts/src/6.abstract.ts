// 抽象类 专门用于被其他类继承 不能实例化自身
abstract class Sports {
  name: string;
  place: string;
  constructor(name: string, place: string) {
    this.name = name;
    this.place = place;
  }
  abstract play(): void // 抽象方法只能定义在抽象类, 子类必须对抽象方法重写
}

class Basketball extends Sports {
  shape: string;
  constructor(name: string, place: string, shape: string) {
    super(name, place)
    this.shape = shape;
  }
  play(): void {
    console.log('打篮球')
  }
}

let ba = new Basketball('篮球', '篮球场', '球形')
ba.play()

