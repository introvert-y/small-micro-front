<template>
  <div class="navbar">
    <div @click="toggleSideBar()">
      <i :class="sidebar.opened ? 'el-icon-s-fold' : 'el-icon-s-unfold'" style="padding: 10px; font-size: 20px"></i>
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-user" style="font-size: 20px"></i>
          王小明
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="toggleDialogVisible">
            <span style="display:block;">
              退出
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  components: {
  },
  created() {
    this.$store.dispatch('InitGlobeCsslWidth', false);
  },
  data() {
    return {
      dialogVisible: false,
      collapse: false,
    };
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar', false);
    },
  }
};
</script>

<style scoped>
.navbar {
  height: var(--header-height);
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
}
</style>
