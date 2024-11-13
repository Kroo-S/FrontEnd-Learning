<template>
  <div class="wrapper">
      <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper__img">
      <div class="wrapper__input">
          <!-- reactive是变成响应式数据，让data中的值和后台的值对应
          v-model是input中双向绑定，让输入框的输入值和data中的值一致 -->
         <input 
            type="text" 
            class="wrapper__input__content" 
            placeholder="请输入用户名"
            v-model="data.username"    
         />
      </div>
      <div class="wrapper__input">
         <input 
            type="text" 
            class="wrapper__input__content" 
            placeholder="请输入密码"
            v-model="data.password"
         />
      </div>
      <button class="wrapper__button" @click="handleLogin">登陆</button>
      <div class="wrapper__link">

          <!-- 注意这里不要用a标签，a标签会自动跳转到Home页面。在页面跳转逻辑上会出问题。产生闪跳的现象 -->
          <!-- 或者用 href='javascript:;' 阻止跳转 -->
          <span class="wrapper__link__login" @click="handleRegister">
            <a href="javascript:;">立即注册</a>
          </span>
          <span class="wrapper__link__bar">/</span>
          <span class="wrapper__link__forget">
            <a href="javascript:;">忘记密码</a>
          </span>
      </div>
  </div>

<!-- ================================== 3-6 toast蒙层 ================================
逻辑：
1. v-if判断什么时候显示 
2. :message显示的内容由setup函数决定 -->

  <toast-part v-if="data.showToast" :message="data.toastMessage"/>
</template> 

<script>
// vue-router插件中引出useRouter，然后useRouter()实例化得到路由器，可以直接使用路由push()方法
import {useRouter} from 'vue-router'

// 3-4 使用axios
// 安装axios； 引入axios、reactive
// import axios from 'axios'  这个在post封装中引用了，这里可以省略
import {reactive} from 'vue'
import { post } from '../../utils/request'
import ToastPart from '../../components/ToastPart.vue'

// // 后端数据接口是content-type：JSON的类型

// // 3-5 header封装到POST函数中了
// axios.defaults.headers.post['Content-Type'] = 'application/json'


export default {
  components: { ToastPart },
    name:'LoginPart',
    //3-2 守卫路由登陆校验
    setup(){
        // 3-4 axios双向数据绑定
        // v-mode、reactive都是双向数据绑定，reactive是composition API的用法
        // 这里将data中的数据和传送的数据进行绑定
        const data = reactive({
            username:'',
            password:'',
            showToast:false,
            toastMessage:''
        });

        //得到router的实例，使用push方法进行页面跳转
        const router = useRouter();
        
        // ===================== 3.6 请求和登录弹层逻辑一样，公用toast函数 =================
        // 失败之后，传入的message参数，放到toastMessage中，然后从父组件传递到子组件中，显示出来
        const toastFail = (message) => {
            data.showToast = true;
            data.toastMessage = message;
            
            setTimeout(()=>{    // 3秒后弹窗消失
                data.showToast = false;
                data.toastMessage = '';
            }, 3000);
        }



        // //================================ 3-2 跳转逻辑 =================================
        // localStorage.isLogin = true;
        // //push跳转
        // router.push({name:'HomePart'});


        // ======================= 3-4 axios数据交互 axios默认的方法 =========================
        // const handleLogin = () => {
            
        //     // axios是基于promise封装的，所以后面接.then()
        //     // 当双向数据绑定验证数据之后是对的，跳转到Home页；否则提示错误；.then方法是axios的默认方法
        //     axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login', {
        //         username: data.username,
        //         password: data.password
        //     })
        //     .then(() => {
        //         // 提交数据给后台后，设置isLogin='true'属性；然后页面跳转到HomePart
        //         localStorage.isLogin = true;
        //         router.push({name:'HomePart'});
        //     })
        //     .catch(() => {
        //         alert('登陆失败，请重新输入');
        //     });

        // }

        // ========================= 3-5 01. 用async语法糖，代替.then()方法 =======================
        const handleLogin = async () => {      // 用了async就可以不用then()了
            
            // axios是基于promise封装的，所以后面接.then()
            // 当双向数据绑定验证数据之后是对的，跳转到Home页；否则提示错误；.then方法是axios的默认方法

            // 如果请求失败，会在await那层抛出，不会执行后面的代码；
            // 请求使用try,catch，可以执行后面的请求错误的代码。正确的写在try中，错误的写在catch中
            try{
                // 用async await代替then，等待await后面返回的值
                // 会先看请求，再看登陆

                // fastmock1是请求失败，地址错误
                // login1是登陆失败，输入的数据和后台接口不一致

                // // 3-5 01
                // const result = await axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login', {
                //     username: data.username,
                //     password: data.password
                // })

                // 3-5 02 封装axios请求之后   这里就不用axios.post,直接用post()
                const result = await post('/api/user/login', {
                    username: data.username,
                    password: data.password
                })

                // console.log(result);   results是借口得到的结果，data里的errno：0的时候，才是正确的。返回home页面

                // ========================== 3.5 01 result来定义 ========================
                // if(result?.data?.errno === 0 ){     // 等价于：  result?result.data:undefined  当存在的时候为真
                //     localStorage.isLogin = true;
                //     router.push({name:'HomePart'});
                // }else{
                //     alert('登陆失败，请重新输入');
                // }

                // ========================== 3.5 02 后面返回的是result.data，简化代码 ==========================
                
                if(result?.errno === 0 ){     // 等价于：  result?result.data:undefined  当存在的时候为真
                    localStorage.isLogin = true;
                    router.push({name:'HomePart'});
                }else{
                    toastFail('登陆失败，请重新输入');
                }

            }
            catch{
                toastFail('请求失败！！！');
            }

        }

        // 3-3 去注册  push跳转到register页面
        const handleRegister = () => {
            router.push({name:'RegisterPart'});
        }

        return { handleLogin, handleRegister, data };   //这样要写成{}形式
    }
}

</script>

<style lang="scss" scoped>
    @import '../../style/variables.scss';
    .wrapper{
       position: absolute;
       top: 50%;
       left: 0;
       right: 0;
       transform: translateY(-50%);
       &__img{
           display: block;
           width: .66rem;
           height: .66rem;
           margin: 0 auto 0.4rem auto    //水平居中，下面间隔40px
       }
       &__input{
           margin: 0 0.4rem .16rem .4rem;
           &__content{
               //input样式
               width: 2.95rem;
               height: .48rem;
               background: #F9F9F9;
               border: 1px solid rgba(0,0,0,0.10);
               border-radius: .06rem;
                
               //文字样式
               font-family: PingFangSC-Regular;
               font-size: .16rem;
               letter-spacing: 0;
               line-height: .24rem;
               text-indent: .16rem;     //文字缩进
               &::placeholder{
                    color:#ccc;
               }
           }
       }
       &__button{
           width: 2.95rem;
           height: .48rem;
           margin:.16rem .4rem;
           border:none;
           background: #0091FF;
           box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
           border-radius: 4px;

           //字体样式
           font-size: .16rem;
           line-height: .24rem;
           color: #fff;
       }
       &__link{
           margin: 0 1.18rem;
           text-align: center;
           a{
               text-decoration: none;
               font-size: 14px;
               color: rgba(0,0,0,0.50);
           }
           &__bar{
               margin:0 .08rem;
           }        
       }
    }

</style>