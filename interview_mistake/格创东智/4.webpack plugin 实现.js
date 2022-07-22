// plugin的本质是一个类，可以在webpack的生命周期中被多次的调用,这个类必须实现的方法就是apply
class MyPlugin {
  constructor(options) {}
  // 必须要实现的方法，这个方法接收一个参数：compiler对象
  apply(compiler) {
    // 可以在这个参数上来监听事件
    compiler.plugin('event-name', (compilation) => {})
  }
}

modulee.exports = MyPlugin
