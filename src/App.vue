<template>
  <div id="app" class="pt-3 pd-3">
    <input-form :ttl="title" />
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue'

export default {
  name: 'app',
  components: {
    InputForm
  },
  data() {
    return {
      // titleをpropとしてComponentに渡す
      title : "退勤連絡 BOT"
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
