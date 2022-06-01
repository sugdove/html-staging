import Food from './Food'
import Snake from './Snake'
import ScorePanel from './ScorePanel'
export default class GameControl {
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分牌
  scorePanel: ScorePanel;
  // 创建一个存储方向的属性
  private direction: string;
  private interval = null;
  private isLive = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 1);
    this.init()
  }
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
  }
  // 创建一个键盘按下的函数
  keydownHandler(e: KeyboardEvent) {
    this.direction = e.key
    this.stop()
    const arr = ['Up', 'Down', 'Left', 'Right', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
    if (arr.includes(e.key)) {
      if (this.interval) clearInterval(this.interval)
      this.interval = setInterval(() => { this.run(e.key) }, 880 - this.scorePanel.level * 80)
    }

  }
  // 创建一个控制蛇移动的方法
  run(direction) {
    // switch (direction) {
    //   case 'ArrowUp':
    //   case 'Up':
    //     this.snake.Y -= 10
    //     break;
    //   case 'ArrowLeft':
    //   case 'Left':
    //     this.snake.X -= 10
    //     break;
    //   case 'ArrowDown':
    //   case 'Down':
    //     this.snake.Y += 10
    //     break;
    //   case 'ArrowRight':
    //   case 'Right':
    //     this.snake.X += 10
    //     break;
    // }
    this.moveBody(direction)
    this.eatFood()
    this.defeated()
  }
  // 蛇身体是如何移动的
  moveBody(direction) {
    let doms = document.getElementById('snake').children
    // d = doms.length - 1; d >= 0; d--
    for (let d = doms.length - 1; d >= 0; d--) {
      let cdom = doms[d] as HTMLElement
      const hdomx = this.snake.X
      const hdomy = this.snake.Y
      switch (direction) {
        case 'ArrowUp':
        case 'Up':
          if (d === 0) {
            this.snake.Y -= 10
          }
          else {
            if (hdomx === cdom.offsetLeft) {
              cdom.style.top = parseInt(cdom.style.top) - 10 + 'px'
            }
            else if (hdomx > cdom.offsetLeft) {
              cdom.style.left = cdom.offsetLeft + 10 + 'px'
            }
            else if (hdomx < cdom.offsetLeft) {
              cdom.style.left = cdom.offsetLeft - 10 + 'px'
            }
          }
          break;
        case 'ArrowLeft':
        case 'Left':
          if (d === 0) {
            this.snake.X -= 10
          }
          else {
            if (hdomy === cdom.offsetTop) {
              cdom.style.left = parseInt(cdom.style.left) - 10 + 'px'
            }
            else if (hdomy > cdom.offsetTop) {
              cdom.style.top = cdom.offsetTop + 10 + 'px'
            }
            else if (hdomy < cdom.offsetTop) {
              cdom.style.top = cdom.offsetTop - 10 + 'px'
            }
          }
          break;
        case 'ArrowDown':
        case 'Down':
          if (d === 0) {
            this.snake.Y += 10
          }
          else {
            if (hdomx === cdom.offsetLeft) {
              cdom.style.top = parseInt(cdom.style.top) + 10 + 'px'
            }
            else if (hdomx > cdom.offsetLeft) {
              cdom.style.left = cdom.offsetLeft + 10 + 'px'
            }
            else if (hdomx < cdom.offsetLeft) {
              cdom.style.left = cdom.offsetLeft - 10 + 'px'
            }
          }
          break;
        case 'ArrowRight':
        case 'Right':
          if (d === 0) {
            this.snake.X += 10
          }
          else {
            if (hdomy === cdom.offsetTop) {
              cdom.style.left = parseInt(cdom.style.left) + 10 + 'px'
            }
            else if (hdomy > cdom.offsetTop) {
              cdom.style.top = cdom.offsetTop + 10 + 'px'
            }
            else if (hdomy < cdom.offsetTop) {
              cdom.style.top = cdom.offsetTop - 10 + 'px'
            }
          }
          break;
      }
    }
  }
  // 蛇吃到食物的逻辑
  eatFood() {
    if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
      this.food.change();
      this.snake.addBody(this.snake.lastX, this.snake.lastY);
      this.scorePanel.addScore()
    }
  }
  // 停止方法
  stop() {
    if (this.direction === 'Escape') {
      clearInterval(this.interval)
    }
  }
  // restart
  restart() {
    clearInterval(this.interval)
    this.food.change()
    this.snake.init()
    this.scorePanel.init()
  }
  // 失败的逻辑
  defeated() {
    let X = this.snake.X
    let Y = this.snake.Y
    const width = this.food.element.parentElement.clientWidth;
    const height = this.food.element.parentElement.clientHeight;
    if (X < 0 || X > width || Y < 0 || Y > height) {
      alert('游戏失败')
      this.restart()
    }
  }
}