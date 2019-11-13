<template>
  <div class="container">
    <section>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </section>
    <section>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </section>
    <section>
      <el-container>
        <el-aside width="150px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </section>
    <section>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="150px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </section>
    <section>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="150px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </section>
    <section>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="150px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </section>
    <section>
      <el-container>
        <el-aside width="150px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </section>
  </div>
</template>



<script>
export default {};
</script>


<style  scoped>
.container > section {
  margin-bottom: 40px;
}
.container .el-container {
  background-color: #e9eef3;
  height: 100%;
}
.container .el-main {
  background-color: #e9eef3;
}
.container .el-footer {
  background-color: #b3c0d1;
}
.container .el-aside {
  background-color: rgb(134, 136, 138);
}
</style>