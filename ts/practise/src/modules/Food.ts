// 定义食物类
export default class Food {
  // 定义一个食物所对应的元素
  element: HTMLElement;
  // 构造函数
  constructor() {
    this.element = document.getElementById('food')!;
  }
  // 定义一个方法获取食物的坐标
  get X(): number {
    return this.element.offsetLeft;
  }
  get Y(): number {
    return this.element.offsetTop;
  }
  // 定义一个方法改变食物的坐标
  change(): void {
    const width = this.element.parentElement.clientWidth;
    const height = this.element.parentElement.clientHeight;
    const x = Math.floor(Math.random() * Math.floor(width / 10)) * 10
    const y = Math.floor(Math.random() * Math.floor(height / 10)) * 10
    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
  }
}