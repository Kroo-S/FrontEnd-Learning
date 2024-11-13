<template>
  <!-- ================================== 底部区域 ==================================== -->
  <div class="docker">
    <!-- 2.7 一般书写，列出来
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe612;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe61b;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe614;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe615;</div>
      <div class="docker__title">我的</div>
    </div> -->


    <!-- 2.7 v-for，循环书写 -->
    <!-- vue默认绑定的key,避免重复渲染 -->
    <!-- 注意这里class="docker"的样式格式，后面里面是引号 -->
    <div 
      v-for="(item,index) in dockerList"
      :class="{'docker__item':true, 'docker__item--active': index === 0 } "
      class= "docker__item"
      :key="item.id" 
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </div>

  </div>

</template>

<script>
export default {
    name:'DockerPart',
    setup(){
      const dockerList = [
        { id:'1', icon:'&#xe612', text:'首页'},
        { id:'2', icon:'&#xe61b', text:'购物车'},
        { id:'3', icon:'&#xe614', text:'订单'},
        { id:'4', icon:'&#xe615', text:'我的'},
      ];
      return {  dockerList  };
    }
}
</script>

<!-- 2.8 写scoped是为了css只作用于当前template -->
<style lang="scss" scoped>

@import '../../style/mixins.scss';
@import '../../style/variables.scss';
    // 一、2. BEM写法：BEM 是块(block),元素(element),修饰符(modifier)简写
//     block__element--modifier
.docker{
  //background: rgb(179, 62, 62);
  //样式
  background-color: #fff;
  border-top:0.01rem solid #f1f1f1;
  padding:0 0.18rem;
  box-sizing: border-box;
  //定位
  position: absolute;
  left:0;
  bottom:0;
  //宽高
  height: 0.49rem;
  width:100%;
  //响应式布局:容器display
  display:flex;

  //一下item和title是BEM写法
  &__item{
    //响应式布局：项目平分，居中显示
    flex:1;
    //每一块的样式
    text-align:center;
    .iconfont{
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    &--active{
      color:#1FA4FC;
    }
  }
  &__title{
    font-size:0.2rem;
    transform: scale(0.5,0.5);
    transform-origin: center top;
  }
}
</style>
