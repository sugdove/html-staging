1. 同步操作 放入执行栈
2. 异步操作 放入异步队列 
3. 异步操作 宏任务： setTimeout setInterval setImmediate
            微任务： promise  
4. 微任务执行顺序 》 宏任务之前
5. script 宏任务-》 同步任务 -> 微任务 -》 宏任务 