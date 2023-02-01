<template>
  <div class="header-content">
    <div class="l-content">
      <!-- 左侧导航收缩按钮 -->
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="small"
      ></el-button>
      <!-- 面包屑 -->
      <span class="crumbs">首页</span>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user-avatar" src="@/assets/DefaultAvatar.jpg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script>

<style lang="less" scoped>
.header-content {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .crumbs {
    color: #fff;
    font-size: 14px;
    margin-left: 20px;
  }
  .r-content {
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>