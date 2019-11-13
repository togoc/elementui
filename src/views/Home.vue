
<template>
  <div class="home">
    <el-header style="text-align: center;font-size: 12px">
      <div class="title">{{route[1].toUpperCase()+route.slice(2)}}</div>
      <div class="right">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王大虎</span>
      </div>
    </el-header>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside class="as" width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          :default-active="route"
          v-for="(item, index) in demoList"
          :key="index"
          unique-opened
        >
          <el-menu-item-group :title="item.title">
            <router-link v-for="(item1, index1) in item.form" :key="index1" :to="item1.link">
              <el-menu-item :index="item1.link">{{item1.title}}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    route() {
      return this.$route.path;
    },
    demoList() {
      let arr = JSON.parse(localStorage.getItem("list"));
      return arr;
    }
  }
};
</script>

<style>
.title {
  font-weight: bold;
  font-size: 16px;
}
.right {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 20px;
}
.home {
  box-sizing: border-box;
  overflow-y: hidden;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.as {
  color: #333;
  height: 100vh;
  padding-bottom: 70px;
}
.el-main {
  padding-bottom: 70px !important;
}
.el-container {
  height: 100vh;
}
</style>
