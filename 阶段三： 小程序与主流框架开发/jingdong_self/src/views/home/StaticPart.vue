<template>
  <!-- ============================ 顶部 position坐标 部分 =============================== -->
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      <span class="position__text">北京理工大学国防科技园2号楼10层</span>
      <span class="iconfont position__notice">&#xe629;</span>
    </div>
    <!-- ============================ 顶部search部分 ============================ -->
    <div class="search clear">
      <span class="iconfont search__icon">&#xe632;</span>   <!--这里注意要加iconfont这个公共样式！！！-->
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <!-- ============================ 顶部banner部分 ============================ -->
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
    </div>
    <!-- ============================ 中间导航部分 =========================== -->
    <div class="icons">
      <!-- 一般写法 -->
        <!-- <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
          />
          <p class="icons__item__desc">菜市场</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/水果店.png"
          />
          <p class="icons__item__desc">水果店</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
          />
          <p class="icons__item__desc">鲜花绿植</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
          />
          <p class="icons__item__desc">医药健康</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/家居.png"
          />
          <p class="icons__item__desc">家居时尚</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
          />
          <p class="icons__item__desc">烘培蛋糕</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/签到.png"
          />
          <p class="icons__item__desc">签到</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
          />
          <p class="icons__item__desc">大牌免运</p>
        </div>
        <div class="icons__item">
          <img
            class="icons__item__img"
            src="http://www.dell-lee.com/imgs/vue3/红包.png"
          />
          <p class="icons__item__desc">红包套餐</p>
        </div> -->
    
      <!-- 2-7. v-for写法 -->
      <!-- 模版字符串中间不用加+号，之间写${}即可 -->
      <div 
        class="icons__item"
        v-for="item in iconList"
        :key="item.id"
      >
          <img
            class="icons__item__img"
            :src="`http://www.dell-lee.com/imgs/vue3/${item.srcUrl}.png`"  
          />
          <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>


    <!-- ============================== 中间条 ============================= -->
    <div class="gap"></div>
</template>

<script>
export default {
    name: 'StaticPart',
    setup(){
      const iconList = [
        { id:1, srcUrl:'超市', desc:'超市便利' },
        { id:2, srcUrl:'菜市场', desc:'菜市场' },
        { id:3, srcUrl:'水果店', desc:'水果店' },
        { id:4, srcUrl:'鲜花', desc:'鲜花绿植' },
        { id:5, srcUrl:'医药健康', desc:'医药健康' },
        { id:6, srcUrl:'家居', desc:'家居时尚' },
        { id:7, srcUrl:'蛋糕', desc:'烘培蛋糕' },
        { id:8, srcUrl:'签到', desc:'签到' },
        { id:9, srcUrl:'大牌免运', desc:'大牌免运' },
        { id:10, srcUrl:'红包', desc:'红包套餐' }
      ];
      return { iconList };    //注意这里要return
    }
}
</script>

<!-- 2.8 写scoped是为了css只作用于当前template -->
<style lang="scss" scoped>

@import '../../style/mixins.scss';
@import '../../style/variables.scss';
    .clear{
        clear: both;    //清除浮动
    }
    // 二、顶部position部分
.position{
  //统一颜色：#333
  color: $content-fontcolor;
  padding: 0.16rem 0;
  &__icon{  //坐标样式
    display:block;
    float: left;
    padding-top: .01rem;
    transform: scale(1.2,1.2);
    transform-origin: center;
  }
  &__text{  //文字样式
    display:block;
    float: left;
    @include ellipsis;
    font-size: 0.16rem;
    line-height: 0.22rem;
    width:2.5rem;
    padding-left:0.085rem;
  }
  &__notice{  //消息样式
    display: block;
    float: right;
    padding-top: .01rem;
    transform: scale(1.2,1.2);
    transform-origin: center;
  }
}

// 三、搜索部分
.search{
  // position:relative;
  // top:0.16rem;
  // bottom:0.12rem;
  width:3.39rem;
  height: 0.32rem;
  background-color: #F5F5F5;
  color:#999;
  border-radius: .16rem;
  font-size: 0.14rem;
  line-height: 0.16rem;
  margin-top: 0.12rem;
  &__icon{
    display: inline-block;
    padding: 0.08rem .12rem 0 .16rem;
  }
  &__text{
    display: inline-block;
  }
}
//三、banner部分
.banner{
  height:0;
  overflow: hidden;
  padding-top: 0.16rem;
  padding-bottom:25.4%;
  &__img{
    width:3.39rem;
    height:0.86rem;
  }
}
// 四、icon导航部分
.icons{
  display:flex;
  flex-wrap:wrap;
  margin-top:0.16rem;
  &__item{
    width:20%;
    &__img{
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc{
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
// 五、gap
.gap{
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>