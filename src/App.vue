<template>
<Forum />
</template>

<script>
import Forum from './components/Forum.vue'
// import SignIn from './components/SignIn.vue'
// import SignUp from './components/SignUp.vue'


export default {
  name: 'App',
  components: {
    // SignIn,
    // SignUp,
    Forum
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
