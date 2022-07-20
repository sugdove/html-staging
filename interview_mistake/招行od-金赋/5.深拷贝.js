function deepClone(target) {
  if (target === null) return target
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  if (typeof target !== 'object') return target
  const cloneObj = new target.constructor()
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(target[key])
    }
  }
  return cloneObj
}

const a = deepClone({ a: { b: { c: [] } } })

console.log(a)
