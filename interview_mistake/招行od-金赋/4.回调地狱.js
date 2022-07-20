1.出现原因
2.解决方案： 1. promise().then .catch()  .then() .catch
             const p = new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(1)
                },0)
             })
            
             p.then(res=> {
              // 异步
              console.log(res)
             })
             .all .race 
             Promise.prototype.all = function(arr) {
              return new Promise((resolve, reject) => {
                let result = []
                for(let i = 0; i < arr.length; i++) {
                  arr[i].then(res=>{
                    result.push(res)
                    if(result.length === arr.length) {
                      resolve(result)
                    }
                  },err => {
                    reject(err)
                  })
                }
              })
             }

             