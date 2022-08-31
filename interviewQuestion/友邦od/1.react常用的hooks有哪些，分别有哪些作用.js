const { application } = require("express")

1. useState 定义一个状态和一个可改变状态的方法
2. useReducer 类似于redux 定义一个状态和dispatch 通过useReducer 传入一个reducer和 application
3. useMemo 缓存值， 类似于computed
4. useCallBack 避免子组件不必要的render
5. useEffect 
6. memo 浅层比对props如果相同则直接复用最近一次渲染
7. useRef 获取dom