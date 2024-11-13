import axios from 'axios'

export const post = (url,data={}) => {
    return new Promise( (resolve,reject)=>{    // 返回一个promise的对象
        axios.post(url,data,{
            // baseURL后面自动拼接在url上，api前面的是baseURL
            baseURL:'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
            headers:{
                'Content-Type' : 'application/json'
            },
        }).then(    // then中有两个参数，前面是成功，后面是失败
            response => {resolve(response.data)},       //抛出response.data数据。最终是要获取data上的errno===0；这里用data可以简化代码
            err => {reject(err)}
            )      
    })
}