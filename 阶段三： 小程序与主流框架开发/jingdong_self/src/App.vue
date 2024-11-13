<template>
  <!-- 3.1 登陆页面路由 -->
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<!-- 2.8 写scoped是为了css只作用于当前template -->
<style lang="scss" scoped> 
  
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

</style>
