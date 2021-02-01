<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <vuexTx />
  </div>
</template>

<script>
// @ is an alias to /src
import vuexTx from '@/components/vuexTx.vue'

export default {
  name: 'Home',
  components: {
    vuexTx
  }
}
</script>
