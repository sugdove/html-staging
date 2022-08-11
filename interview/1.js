区块链：
混合app
全局状态管理
useMemo useCallback
Number 和 parseInt 区别，优缺点，平时使用这个吗:
 1.Number 用于任何数据类型 Boolean 转为 true -> 1  false -> 0 null -> 0 undefined ->NaN 对象->valueof方法
 2.parseInt 只能用于字符串
后端一次性返回几万条数据如何处理:
1.懒加载+分页（滚动）2.防抖节流优化 3.js缓冲器进行分片处理
4.web worker 开辟新线程处理数据： 
let worker = new Worker('xxx.js') 
worker.postMessage('') 
worker.onmessage = (event) => {event.data}
worker.terminate()关闭
self.close() 关闭
谷歌地图如何翻墙
离线百度地图
地图瓦片处理


