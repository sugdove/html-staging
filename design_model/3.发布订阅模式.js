function EventHub() {
  this.callbacks = {}
}
EventHub.prototype.on = function (key, callback) {
  this.callbacks[key] = { callback, type: 'on' }
}
EventHub.prototype.$emit = function (key, data) {
  if (this.callbacks.hasOwnProperty(key)) {
    this.callbacks[key].callback(data)
    if (this.callbacks[key].type === 'once') {
      delete this.callbacks[key]
    }
  }
}
EventHub.prototype.off = function (key) {
  delete this.callbacks[key]
}
EventHub.prototype.once = function (key, callback) {
  this.callbacks[key] = { callback, type: 'once' }
}
const e1 = new EventHub()
e1.once('Hello', (v) => {
  console.log(v)
})
// e1.off('Hello')
e1.$emit('Hello', 'hello world!')
e1.$emit('Hello', 'hello world twice!')
