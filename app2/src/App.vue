<template>
  <div id="app">
    <div class="container">
      <el-button
        style="margin-right: 40px"
        type="text"
        @click="dialogVisible = true"
        >点击打开 Dialog
      </el-button>

      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span class="login">这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <router-view />

    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dialogVisible: false,
    };
  },
  created() {
    window.test_js_isolation = '13423';
    console.log('app2', window.test_js_isolation)
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
</style>
<style>
.login {
  color: blue;
}
</style>
<style scoped>
.container {
  margin-top: var(--header-height);
  margin-left: var(--navbar-width);
  transition: all 0.3s;
}
</style>