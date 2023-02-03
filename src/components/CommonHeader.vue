<template>
  <div class="header-content">
    <div class="l-content">
      <!-- 左侧导航收缩按钮 -->
      <el-button
        style="margin-right: 20px"
        @click="handleMenu"
        icon="el-icon-menu"
        size="small"
      ></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
        >
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
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
import { mapState } from "vuex";
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
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
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
  .l-content {
    display: flex;
    align-items: center;
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: normal;
        &.is-link {
          color: #666;
        }
        &:last-child {
          .el-breadcrumb__inner {
            color: #fff;
          }
        }
      }
    }
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
