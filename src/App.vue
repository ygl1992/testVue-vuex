<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Home</router-link>|
      <router-link to="/params/198/javascript权威指南">Params</router-link>|
      <router-link to="/goHome">goHome</router-link>|
      <router-link to="/Hi1">Hi1</router-link>|
      <router-link to="/xiaopang">xiaopang</router-link>|
    </p>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
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
