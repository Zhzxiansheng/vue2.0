<template>
  <div>
    <h3>vuex 通信数据：</h3>
    {{this.$store.state}}
    <p>{{$store.state.name}}  今天他： {{$store.state.age}} 岁了</p>
    <p>她的年龄： {{$store.getters.myAge}} 岁</p>

    <!-- <ul>
      <li>修改状态： 同步年龄mutations : <button @click="$store.commit('changeAge', 15)">修改年龄</button></li>
      <li>修改异步年龄： actions: <button @click="$store.dispatch('changeAge', 5)">修改年龄</button></li>
    </ul> -->
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$store)
    // 可以在某个组件内修改，但是这种写法是不合理的
    // this.$store.state.name = 'hh';
  }
}
</script>