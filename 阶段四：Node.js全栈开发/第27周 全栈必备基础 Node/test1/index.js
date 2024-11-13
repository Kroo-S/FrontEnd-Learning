const http = require('http')

//req - request,  res-response

const server = http.createServer((req,res)=>{
    const url = req.url     //  '/index.html?a=100'
    const path = url.split('?')[0]      //  第一项的'/index.html'
    res.end(path)
})

server.listen(3000)