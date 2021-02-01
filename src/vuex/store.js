import {applyMixin} from './install'
import { forEachValue } from '../util'
export let _Vue;


export class Store {
  constructor(options) { // vuex是基于vue实现的，需要用到vue的响应式
    console.log(options)
    // this.state = options.state; // 这样写 数据不是响应式的，那么哪里的数据是响应式的  new Vue => data
    let computed = {}
    this.getters = {}
    this.mutations = {}

    forEachValue(options.getters, (value, key) => {
      console.log(value, key);
      computed[key] = () => { // 靠 vue computed 属性进行了优化
        return value.call(this, this.state)
      }
      Object.defineProperty(this.getters, key, {
        // 这种方式每次取值都会执行用户的方法， 性能差，我希望第一次取值能够把结果缓存下来
        get: () => {
          return this._vm[key]; // 取computed key 属性
        }
      })
    })
    forEachValue(options.mutations, () => {
      
    })

    this._vm = new _Vue({
      data: {
        $$state: options.state
      },
      computed,
    }); // 内部会使用代理，把所有属性代理给 this._vm
      // Vue中不会对$ 开头的 的属性进行代理操作  不会代理到实例上
      // console.log(this._vm)
  }
  get state() { // 类原型上的方法
    return this._vm._data.$$state;
  }
  commit
}


export const install = (Vue) => {
  _Vue = Vue;
  applyMixin(Vue)
}