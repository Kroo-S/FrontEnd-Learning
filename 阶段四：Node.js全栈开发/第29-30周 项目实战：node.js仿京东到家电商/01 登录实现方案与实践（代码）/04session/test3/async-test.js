// 演示 async await 执行顺序
// （代码要放在浏览器中执行，这里是写完代码保存一下）

// 加载一张图片
async function getImg(url = '') {
    await fetch(url) // 加载图片
}

async function fn() {
    const url = 'http://img3.sycdn.imooc.com/5a9fc8070001a82402060220-140-140.jpg'
    const start = Date.now() // 记录当前时间
    await getImg(url) // 调动，加载图片
    const ms = Date.now() - start // 计算时间差
    console.log(`加载图片花费了 ${ms} 毫秒`)
}

// fn()

async function A() {
    console.log('A 开始')
    await fn()
    console.log('A 结束')
}

A()

// A  1. fn（B）  2. getImg（C） 3. fn（B）
