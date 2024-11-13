<template>
   <!-- ============================ 一般书写：附近店铺部分 =========================== -->
    <!-- <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div class="nearby__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <div class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div>
    <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div class="nearby__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <div class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div>
    <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div class="nearby__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <div class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div>
    <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div class="nearby__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <div class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div>
    <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div class="nearby__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <div class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div>
    <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div class="nearby__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <div class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div>
    <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div class="nearby__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <div class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div>
    <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div class="nearby__item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
            <span class="nearby__content__tag">月售1W+</span>
          </div>
          <div class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</div>
        </div>
      </div>
    </div> -->

    <!-- 2-7 v-for书写方式 -->

    <div class="nearby">
      <div class="nearby__title">附近店铺</div>
      <div 
        class="nearby__item"
        v-for = "item in nearbyList"
        :key = "item.id"
      >
        <img :src="item.imgUrl" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">{{item.title}}</div>
          <div class="nearby__content__tags">    <!-- v-for放这里，会使得tags占一行;所以要放下面span标签中 -->
            
            <!-- 注意这里的v-for后面是（ ）不是 { } -->
            <span 
              class="nearby__content__tag"
              v-for="(insideItem, insideIndex) in item.tags"      
              :key="insideIndex"
            >{{insideItem}}</span>
          </div>
          <div class="nearby__content__highlight">{{item.desc}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'NearbyPart',
    setup(){
      const nearbyList = [
        {
          id:1,
          imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
          title:'沃尔玛1',
          tags:['月售1W+','起送¥5','基础运费¥5'],
          desc:'IP尊享满89元减4元运费券（每月3张）'
        },
        {
          id:2,
          imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
          title:'沃尔玛2',
          tags:['月售1W+','起送¥5','基础运费¥5'],
          desc:'IP尊享满89元减4元运费券（每月3张）'
        },
        {
          id:3,
          imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
          title:'沃尔玛2',
          tags:['月售1W+','起送¥5','基础运费¥5'],
          desc:'IP尊享满89元减4元运费券（每月3张）'
        },
        {
          id:4,
          imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
          title:'沃尔玛2',
          tags:['月售1W+','起送¥5','基础运费¥5'],
          desc:'IP尊享满89元减4元运费券（每月3张）'
        },
        {
          id:5,
          imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
          title:'沃尔玛2',
          tags:['月售1W+','起送¥5','基础运费¥5'],
          desc:'IP尊享满89元减4元运费券（每月3张）'
        },
        {
          id:6,
          imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
          title:'沃尔玛2',
          tags:['月售1W+','起送¥5','基础运费¥5'],
          desc:'IP尊享满89元减4元运费券（每月3张）'
        },
      ];
      return { nearbyList };
    }
}
</script>

<!-- 2.8 写scoped是为了css只作用于当前template -->
<style lang="scss" scoped>

@import '../../style/mixins.scss';
@import '../../style/variables.scss';
    // 六、nearby的样式
.nearby{
  &__title{
    padding-top:.16rem;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item{
    display: flex;   //这里用flex布局，可以不用float；让img和content两个内容并排显示
    padding-top: .12rem;
    &__img{
      width:.56rem;
      height:.56rem;
    }
  }
  &__content{
    flex:1;         //这里用flex:1是为了让content填充item除img之外的剩余部分
    padding-left: .16rem;
    padding-bottom:.12rem;
    border-bottom: 1px solid $content-bgColor;   //下面的横线
    &__title{
      font-size:.16rem;
      line-height: .22rem;
    }
    &__tags{
      font-size:.1rem;
      line-height: .18rem;
      margin-top: .08rem;
    }
    &__tag{
      padding-right:.16rem;
      font-family: PingFangSC-Regular;
    }
    &__highlight{
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }
}
</style>