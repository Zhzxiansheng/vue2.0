import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store, // 此store的目的是让所有组件都能访问到这个store的对象
  render: h => h(App)
}).$mount('#app')
