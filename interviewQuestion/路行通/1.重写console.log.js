let consoleLog_ = console.log
console.log = function (message) {
  consoleLog_.call(this, `重写后` + message)
}

console.log(111)
