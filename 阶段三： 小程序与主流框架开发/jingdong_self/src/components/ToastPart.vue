<!-- ============================ 3.6 toast蒙层 ========================= -->
<template>
  <div class="toast">{{message}}</div>
</template>

<script>
export default {
    props:['message']   //这里绑定的是message
}
</script>

<style lang='scss' scoped>
    .toast{
        position: fixed;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);

        background: rgba($color: #000, $alpha: 0.3);
        color:white;
        padding:0.1rem;
        border-radius: 0.06rem;
    }
</style>