// 记分牌
class ScorePanel {
  private score: number = 0;
  private level: number = 1;
  private maxLevel: number;
  private upScore: number;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  constructor(maxLevel: number = 10, upScore: number = 5) {
    this.scoreEle = document.getElementById('score')
    this.levelEle = document.getElementById('level')
    this.maxLevel = maxLevel
    this.upScore = upScore
  }
  addScore(): void {
    this.score++
    this.scoreEle.innerHTML = 'SCORE:' + String(this.score)
    if (this.score % this.upScore === 0) {
      this.addLevel()
    }
  }
  addLevel(): void {
    if (this.level < this.maxLevel) {
      this.level++
      this.levelEle.innerHTML = 'LEVEL:' + String(this.level)
    }
  }
}