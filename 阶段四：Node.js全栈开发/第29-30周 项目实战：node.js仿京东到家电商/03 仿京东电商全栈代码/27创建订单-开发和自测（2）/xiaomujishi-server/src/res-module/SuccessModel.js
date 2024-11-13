/**
 * @description 成功返回的数据模型
 * @author 双越老师
 */

class SuccessModel {
    constructor(data) {
        this.errno = 0 //成功返回的标志
        if (data != null) {
            this.data = data
        }
    }
}

module.exports = SuccessModel