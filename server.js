const express = require('express')

const app = express()

app.get('/test',(request, response)=>{

  response.setHeader('Access-Control-Allow-Origin','*')

  response.send('Hello express get')
})

app.post('/post',(request, response)=>{

  response.setHeader('Access-Control-Allow-Origin','*')
  
  const obj = {
    message: 'Hello express post'
  }

  setTimeout(()=>{

    response.send(JSON.stringify(obj))

  },3000)

  // response.send('Hello express post')
})

app.all('/jsonp',(request, response)=>{

  // response.setHeader('Access-Control-Allow-Origin','*')
  
  const obj = {
    message: 'Hello express jsonp'
  }

    response.send(`handle(${JSON.stringify(obj)})`)

  // response.send('Hello express post')
})

app.listen('8080', ()=>{
  console.log('服务已启动, 8080端口监听中...')
})