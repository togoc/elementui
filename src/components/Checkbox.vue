<template>
  <div class="checkbox">
    <section>
      <el-header>基础用法</el-header>
      <el-main>
        <el-checkbox v-model="checked">备选项</el-checkbox>
      </el-main>
    </section>
    <section>
      <el-header>禁用状态</el-header>
      <el-main>
        <el-checkbox disabled v-model="checked1">备选项</el-checkbox>
        <el-checkbox disabled v-model="checked2">备选项</el-checkbox>
      </el-main>
    </section>
    <section>
      <el-header>请从下列选项中挑出动物(多选题) 你的答案:{{checkList}}</el-header>
      <el-main>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="朱"></el-checkbox>
          <el-checkbox label="猫"></el-checkbox>
          <el-checkbox label="狗"></el-checkbox>
          <el-checkbox label="奥利奥" disabled></el-checkbox>
          <el-checkbox label="程序猿" disabled></el-checkbox>
        </el-checkbox-group>
      </el-main>
    </section>
    <section>
      <el-header>请从下列选项中挑出动物(多选题) 你的答案:{{checkedCities}}</el-header>
      <el-main>
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >全选</el-checkbox>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-main>
    </section>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: false,
      checkList: ["朱", "猫", "狗", "程序猿"],
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style  scoped>
section {
  margin-bottom: 40px;
}
</style>