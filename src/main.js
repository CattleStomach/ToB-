import Vue from 'vue'
import App from './App.vue'

//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入vuex
import store from '@/store'

//引入路由
import router from '@/router'

import '@/api/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')