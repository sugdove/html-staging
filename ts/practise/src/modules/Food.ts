import { xy } from '../types/types'
// 定义食物类
class Food {
  // 定义一个食物所对应的元素
  element: HTMLElement;
  // 构造函数
  constructor() {
    this.element = document.getElementById('food')!;
  }
  // 定义一个方法获取食物的坐标
  get xy(): xy {
    const x = this.element.offsetLeft;
    const y = this.element.offsetTop;
    return { x, y }
  }
  // 定义一个方法改变食物的坐标
  changeXy(): void {
    const width = this.element.parentElement.clientWidth;
    const height = this.element.parentElement.clientHeight;
    const x = Math.floor(Math.random() * Math.floor(width / 10)) * 10
    const y = Math.floor(Math.random() * Math.floor(height / 10)) * 10
    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
    console.log({ x, y })
  }
}