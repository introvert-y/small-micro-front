<template>
  <div id="app">
    <el-container
      style="height: 100vh"
      :class="[sidebar.opened ? 'open' : 'close', 'layout-container']"
    >
      <el-scrollbar style="height: 100%">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="!sidebar.opened"
        >
          <router-link to="app1">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">app1</span>
            </el-menu-item>
          </router-link>

          <router-link to="app2">
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">app2</span>
          </el-menu-item>
          </router-link>
        </el-menu>
      </el-scrollbar>
      <!-- <el-container>
        <Navbar />
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container> -->
    </el-container>
    <div :class="[sidebar.opened ? 'open' : 'close', 'layout-navbar']">
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from "@/layout/Navbar/index.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
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
body {
  margin: 0;
  border: 0;
  padding: 0;
}
</style>
<style>
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
} */

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<style scoped>
.layout-container {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  /* css var comes from the styleguide */
  background-color: white;
  transition: all 0.3s ease-in-out;
  box-shadow: 0.2rem 0 0.2rem var(--light-gray);
  z-index: 1000;
}
.layout-container.open {
  width: var(--navbar-open-width);
}
.layout-container.close {
  width: var(--navbar-close-width);
}
.layout-navbar {
  position: fixed;
  /* left: var(--navbar-width); */
  top: 0;
  transition: all 0.3s ease-in-out;

  /* width: calc(100% - var(--navbar-width)); */
  /* transition: all 0.2s ease-in-out; */
}
.layout-navbar.open {
  left: var(--navbar-open-width);
  width: calc(100% - var(--navbar-open-width));
}
.layout-navbar.close {
  left: var(--navbar-close-width);
  width: calc(100% - var(--navbar-close-width));
}
</style>
