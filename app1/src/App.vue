<template>
  <div id="app">
    <div class="container">
      <page-header title="Dogs dashboard"></page-header>

      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link>
    </div>
    <router-view/>

  </div>
</template>

<script>
import { PageHeader } from "@study/styleguide";

export default {
  name: 'App',
  components: { PageHeader },
  created() {
    console.log('app1111111', window.test_js_isolation)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
<style scoped>
.container {
  margin-top: var(--header-height);
  margin-left: var(--navbar-width);
  transition: all 0.3s;
}
</style>