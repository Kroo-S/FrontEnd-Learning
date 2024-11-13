const http = require('http')
const querystring = require('querystring')

// req Request，res Response
const server = http.createServer((req, res) => {
    const url = req.url
    const path = url.split('?')[0] 
    const queryStr = url.split('?')[1]
    const method = req.method
    const query = querystring.parse(queryStr)

    // 定义路由：模拟获取留言板列表
    if (path === '/api/list' && method === 'GET') {
        // res.end('this is list router')

        // 返回结果
        const result = {
            errno: 0,
            data: [
                { user: '张三', content: '留言1' },
                { user: '李四', content: '留言2' }
            ]
        }
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end( JSON.stringify(result) ) // body
    }
    
    // 定义路由：模拟创建留言
    if (path === '/api/create' && method === 'POST') {
        // res.end('this is create router')

        const reqType = req.headers['content-type']

        let bodyStr = ''
        req.on('data', chunk => { // 服务端怎么去识别“流”，并接收数据
            // chunk 即“流”的每一段数据
            bodyStr = bodyStr + chunk.toString()
        })
        req.on('end', () => { // 服务端怎么知道流完了
            if (reqType === 'application/json') { // json 格式
                const body = JSON.parse(bodyStr)
                console.log('body is ', body) // 对象格式
            }
            
            res.end('接收完成') // 异步
        })

        // const result = {
        //     errno: 0,
        //     message: '创建成功'
        // }
        // res.writeHead(200, { 'Content-type': 'application/json' })
        // res.end( JSON.stringify(result) ) // body

        return
    }

    // 没有命中路由，默认 404
    // res.end('404')
    // res.writeHead(404, { 'Content-type': 'text/plain' })
    // res.end('404 Not Found')
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>404 Not Found</h1>
            </body>
        </html>
    `)
})

server.listen(3000) // 可以监听 http 请求
console.log('http 请求已经被监听，3000 端口， 请访问 http://localhost:3000')
