const _ = require('lodash')   //    common.js相关内容有联系

const arr = [1,2,3]
const otherArr = _.concat(arr,4,5)
console.log(otherArr)   //  [ 1, 2, 3, 4, 5 ]