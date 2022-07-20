vue2: 
     create bef   mouted b update be  destory be
     <keep-alive> actived deActived 
      mouted(){跟新dom}
      beforeDestroy() {
        1.清除一些定时器
        2.清除一些事件的绑定
        3.去除一些全局的变量
      }
      
vue3: setup -> beforeCreated created
      其他生命周期 import { onMount, onBeforeMount .... } from 'vue' 