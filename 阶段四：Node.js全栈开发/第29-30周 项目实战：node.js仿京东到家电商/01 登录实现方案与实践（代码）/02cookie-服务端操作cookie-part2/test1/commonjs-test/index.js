console.log('start...')

const flag = true

if (flag) {
    const { sum, test } = require('./utils') // 动态

    test()

    const res = sum(15, 30)
    console.log(res)
}
