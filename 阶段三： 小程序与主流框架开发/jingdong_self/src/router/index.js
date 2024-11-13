import { createRouter, createWebHashHistory } from 'vue-router'

// 3.1 这里要在router中引入home和login的页面
import HomePart from '../views/home/HomePart'
import LoginPart from '../views/login/LoginPart'
import RegisterPart from '../views/register/RegisterPart'

const routes = [
  {
    path: '/',
    name: 'HomePart',
    component: HomePart
  },
  //3-3 register页面
  {
    path: '/register',
    name: 'RegisterPart',
    component: RegisterPart,
    beforeEnter(to,from,next){
      const {isLogin} = localStorage;      
      isLogin ? next({name:'HomePart'}) : next();
    }
  },
  {
    path: '/login',
    name: 'LoginPart',
    component: LoginPart,
    //3-2 路由登陆校验
    //在登陆页面进行判断，如果已经登陆，跳转首页；没有登陆展示当前页面
    beforeEnter(to,from,next){
      const {isLogin} = localStorage;      //localStorage中已经有isLogin了，这里是解构赋值
      //这里使用三元运算，简化代码
      isLogin ? next({name:'HomePart'}) : next();
    }
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 3-2 路由守卫实现登陆校验      这里的router在上面产生了
// beforeEach是在每次跳转之前都会执行的方法
router.beforeEach((to, from, next) => {
  
  // 这里如果不判断是否跳转的是注册页面，会一直死循环：
  // 1. 没有登陆就会一直跳到登陆页面。
  // 2. 所以在跳转to.name===login登陆页面的时候，next()展示登陆页面
  // 3. 
  // const isLogin = localStorage.isLogin; 
  // if(isLogin || to.name == 'LoginPart' || to.name == 'RegisterPart')
  // {
  //   next();
  // }else{
  //   next({name:'LoginPart'});
  // }

  const { isLogin } = localStorage;
  if( !isLogin && to.name!=='LoginPart' && to.name!=='RegisterPart' ){
    next({ name:'LoginPart' })
  }else{
    next();
  }

  // const { isLogin } = localStorage;
  // const { name } = to;
  // const isLoginOrRegister = (name === "LoginPart" || name === "RegisterPart");
  // (isLogin || isLoginOrRegister) ? next() : next({ name: 'LoginPart'});

});


export default router
