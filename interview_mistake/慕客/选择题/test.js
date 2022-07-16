const promiseFn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('foo'))
    }, 500)
  })
}

const catchPromise = promiseFn().catch((err) => {
  return err
})

catchPromise.then((res) => {
  console.log(res)
})
