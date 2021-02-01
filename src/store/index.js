import Vue from 'vue'
// import Vuex from 'vuex' // 引入vue 插件

import Vuex from '@/vuex'  // 手动实现vuex

// Vue.use 会默认调用Vuex 的install 方法
// Vue.use = function (plugins) {
//   plugins.install(Vue, options)
// }


Vue.use(Vuex) // vuex中是一个对象， 对象有两个 Store, install 方法

export default new Vuex.Store({ // store
  state: {  // data  // 在js 直接修改是能改state 里的属性值的，但是是违法的，所以要用 mutations 和actions 来同步或异步进行数据修改
    name: 'zhz',
    age: 18,
  },
  getters: { // computed  类似计算属性
    myAge (state) {
      return state.age + 20 
    }
  },
  mutations: { // 更新状态  同步更改状态； mutations 内的方法名，在外面用 commit 获取
    changeAge (state, payload) {
      state.age = state.age + payload;
    }
  },
  actions: { // 异步更改状态，网络请求 存放异步逻辑； 获取数据后，把值传给mutations 然后 mutations 修改 state
    // actions 里面的方法名，在外面用dispatch获取
    changeAge({ commit }, payload) {
      setTimeout(() => {
        commit('changeAge', payload)
      }, 1000)
    }
  },
  modules: { // 进行模块分隔
  },
})
