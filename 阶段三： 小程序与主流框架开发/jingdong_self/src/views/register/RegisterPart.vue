<template>
  <div class="wrapper">
      <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper__img">
      <div class="wrapper__input">
         <input type="text" class="wrapper__input__content" placeholder="请输入用户名">
      </div>
      <div class="wrapper__input">
         <input type="text" class="wrapper__input__content" placeholder="请输入密码">
      </div>
      <div class="wrapper__input">
         <input type="text" class="wrapper__input__content" placeholder="再次输入密码">
      </div>
      <button class="wrapper__button" >注册</button>
      <div class="wrapper__link">
          <!-- 别用a标签 -->
          <span class="wrapper__link__login" @click="backLogin">
              <a href="javascript:;">已有账号去登陆</a>
          </span>
      </div>
  </div>
</template>

<script>
// vue-router插件中引出useRouter，然后useRouter()实例化得到路由器，可以直接使用路由push()方法
import {useRouter} from 'vue-router';    

export default {
    name:'RegisterPart',
    //3-2 守卫路由登陆校验
    setup(){
        //得到router的实例，使用push方法进行页面跳转
        const router = useRouter();
        
        // 3-3 register 点击去登陆页面
        const backLogin = () => {
            router.push({name:'LoginPart'});
        }
        return {backLogin};   //这样要写成{}形式
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
               font-size: 14px;
               color: rgba(0,0,0,0.50);   
               text-decoration: none;
           }
       }
       
    }
</style>