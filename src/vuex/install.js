
function vuexInit() {
  if (this.$options.store) { // 根
    this.$store = this.$options.store
  } else if (this.$parent && this.$parent.$store) {
    this.$store = this.$parent.$store;
  }
}

export const applyMixin = (Vue) => { // 需要将store 属性分配给所有组件
  // install 执行，就会让mixin 执行
  // 子组件在渲染的时候会调用beforeCreate
  Vue.mixin({
    beforeCreate: vuexInit,
  })
}

