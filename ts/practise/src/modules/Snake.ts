export default class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  lastX: number;
  lastY: number;
  constructor() {
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = document.getElementById('snake').getElementsByTagName('div');
    this.init()
  }

  // 获取蛇的坐标（蛇头）
  get X(): number {
    return this.head.offsetLeft
  }
  get Y(): number {
    return this.head.offsetTop
  }
  // 设置蛇头坐标
  set X(value: number) {
    const dom = this.bodies[this.bodies.length - 1] as HTMLElement
    this.lastX = dom.offsetLeft
    this.head.style.left = value + 'px'
  }
  set Y(value: number) {
    const dom = this.bodies[this.bodies.length - 1] as HTMLElement
    this.lastY = dom.offsetTop
    this.head.style.top = value + 'px'
  }
  // 初始化蛇位置
  init(): void {
    this.X = 0
    this.Y = 0
  }
  // 蛇增加身体方法
  addBody(x: number, y: number): void {
    // 向element中添加一个div
    const div = document.createElement('div')
    div.style.left = x + 'px'
    div.style.top = y + 'px'
    document.querySelector('#snake').appendChild(div)
  }
}