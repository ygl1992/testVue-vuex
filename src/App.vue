<template>
  <div id="app">
    <router-view/>
    <i class="icon iconfont icon-gongnengjianyi"></i>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goback () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  opacity: 1;
  transition: opacity 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
