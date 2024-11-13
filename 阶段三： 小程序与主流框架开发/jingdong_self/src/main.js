import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

// 引入了index.scss,这里就不用分开导入了
// import './style/base.scss'
// import './style/iconfont.css'
import './style/index.scss'

createApp(App).use(store).use(router).mount('#app')
