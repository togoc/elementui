<template>
  <div class="input">
    <section>
      <el-header>基础用法 , 您输入的是 : {{input}}</el-header>
      <el-main>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-main>
      <el-header>禁用状态</el-header>
      <el-main>
        <el-input v-model="input" disabled placeholder="请不要输入内容"></el-input>
      </el-main>
    </section>
    <section>
      <el-header>可清空 , 您输入的是 : {{input1}}</el-header>
      <el-main>
        <el-input placeholder="请输入内容" v-model="input1" clearable></el-input>
      </el-main>
    </section>
    <section>
      <el-header>带 icon 的输入框</el-header>
      <el-main>
        <el-input placeholder="请选择日期(后面 : suffix)" suffix-icon="el-icon-date" v-model="input2"></el-input>
        <el-input
          placeholder="请选择日期(前面 : prefix)"
          prefix-icon="el-icon-date"
          style="margin-top:10px"
          v-model="input2"
        ></el-input>
      </el-main>
    </section>
  </div>
</template>



<script>
export default {
  data() {
    return {
      input: "",
      input1: "",
      input2: ""
    };
  }
};
</script>

<style  scoped>
section {
  margin-bottom: 40px;
}
.el-main {
  background-color: rgb(247, 239, 239);
}
</style>