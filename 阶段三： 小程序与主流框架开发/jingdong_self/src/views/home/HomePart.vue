<template>
    <div class="wrapper">
        <Static-Part />
        <Nearby-part />
    </div>
    <Docker-part />
</template>

<script>
import StaticPart from './StaticPart'
import NearbyPart from './NearbyPart.vue'
import DockerPart from './DockerPart.vue'
export default {
    name: 'HomePart',
    components: { StaticPart, NearbyPart, DockerPart }
}
</script>

<!-- 2.8 写scoped是为了css只作用于当前template -->
<style lang="scss" scoped>

    // 一、1. 常规写法：
// .docker{
//   //background: rgb(179, 62, 62);
//   //样式
//   border-top:1px solid #f1f1f1;
//   padding:0 0.18rem;
//   box-sizing: border-box;
//   //定位
//   position: absolute;
//   left:0;
//   bottom:0;
//   //宽高
//   height: 0.49rem;
//   width:100%;
//   //响应式布局:容器display
//   display:flex;

// }
// .docker .docker__item{
//   //响应式布局：项目平分，居中显示
//   flex:1;
//   //每一块的样式
//   text-align:center;
//   .iconfont{
//     font-size: 0.18rem;
//     margin: 0.07rem 0 0.02rem 0;
//   }
// }
// .docker .docker__title{
//   font-size:0.2rem;
//   transform: scale(0.5,0.5);
//   transform-origin: center top;
// }
// .docker .docker__item--active{
//   color:#1FA4FC;
// }

// 引入mixin和variable的样式,省略样式&字体颜色； 后面用@include进行引入ellipsis

.clear{
  clear: both;    //清除浮动
}
// 二、wrapper部分
.wrapper{
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right:0;
  padding:0 0.18rem .2rem;
}


</style>