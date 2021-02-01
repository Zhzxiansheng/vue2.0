
import { Store, install } from './store' 

// 手动封装vuex

// 两种抛出，可以单独方法用，可以整个引入， 方便解构
export {
  Store
}

export default {
  Store, install
}

// 第二种引入 import Vuex from '/store'