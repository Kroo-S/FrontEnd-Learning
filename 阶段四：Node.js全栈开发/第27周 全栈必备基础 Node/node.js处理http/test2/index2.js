const http = require('http')
const querystring = require('querystring')

// req Request，res Response
const server = http.createServer((req, res) => {
    const url = req.url // favicon.ico
    const path = url.split('?')[0] // /api/list
    const queryStr = url.split('?')[1] // 'a=100&b=200' 非结构化
    const method = req.method

    // console.log('url is: ', url) // /api/list?a=100&b=200
    // console.log('method is: ', method)

    // 解析 querystring
    // const query = {}
    // queryStr && queryStr.split('&').forEach(item => {
    //     // item 即 a=100 形式
    //     const key = item.split('=')[0] // 'a'
    //     const val = item.split('=')[1] // '100'
    //     query[key] = val // { a: '100', b: '200' } 结构化
    // })
    const query = querystring.parse(queryStr)
    console.log('query is ', query)

    // 定义路由：模拟获取留言板列表
    if (path === '/api/list' && method === 'GET') {
        if (query.filterType === '1') {
            res.end('this is list router, all')
        }
        if (query.filterType === '2') {
            res.end('this is list router, only mine')
        }
        // res.end('this is list router') // res 的返回，后面会讲
    }
    
    // 定义路由：模拟创建留言
    if (path === '/api/create' && method === 'POST') {
        res.end('this is create router')
    }

    res.end('404')
})

server.listen(3000) // 可以监听 http 请求
console.log('http 请求已经被监听，3000 端口， 请访问 http://localhost:3000')
