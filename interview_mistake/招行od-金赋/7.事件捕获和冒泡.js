1. 捕获阶段 ： 由window 捕获 到 event 从外到内
2. 冒泡阶段： event 冒泡到 window
3. <div onclick="aaa">
<div></div>
</div>
点击里面div 冒泡到外层div 触发事件aaa