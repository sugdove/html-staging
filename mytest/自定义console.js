let _log = console.log
console.log = function (...args) {
  if (args.length === 1) {
    _log.call(this, '%c' + args[0], 'color:red')
  } else {
    _log.call(this, ...args)
  }
}

console.log(111)

const myLog = (...args) => {
  if (args.length === 1) {
    console.log.call(this, '%c' + args[0], 'color: red')
  } else {
    console.log.call(this, ...args)
  }
}

myLog(111)
