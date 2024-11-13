const http = require('http')

// req Request，res Response
const server = http.createServer((req, res) => {
    // console.log('已经收到 http 请求')
    const url = req.url // http://localhost:3000/index.html
    console.log('url is: ', url) // /index.html
    res.end('hello world') // res 返回信息给前端
})

server.listen(3000) // 可以监听 http 请求
console.log('http 请求已经被监听，3000 端口， 请访问 http://localhost:3000')
