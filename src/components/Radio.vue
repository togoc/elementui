<template>
  <div class="form">
    <section>
      <el-header>今天吃饭了吗? ( {{radio}})</el-header>
      <el-main>
        <el-radio v-model="radio" label="吃了"></el-radio>
        <el-radio v-model="radio" label="没有"></el-radio>
      </el-main>
    </section>
    <section>
      <el-header>你是人? ({{radio1}})</el-header>
      <el-main>
        <el-radio disabled v-model="radio1" label="禁用">假人</el-radio>
        <el-radio disabled v-model="radio1" label="这不是废话吗">人</el-radio>
      </el-main>
    </section>
    <section>
      <el-header>选项组 ({{radio3}})</el-header>
      <el-main>
        <el-radio-group v-model="radio3">
          <el-radio :label="3">3</el-radio>
          <el-radio :label="6">6</el-radio>
          <el-radio :label="9">9</el-radio>
        </el-radio-group>
      </el-main>
    </section>
    <section>
      <el-header>按钮 ({{radio4}})</el-header>
      <el-main>
        <el-radio-group v-model="radio4">
          <el-radio-button label="北京" disabled></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </el-main>
      <el-main>
        <el-radio-group v-model="radio4" disabled style="margin-top:5px;">
          <el-radio-button label="北京" disabled></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </el-main>
    </section>
    <section>
      <el-header>带边框 ({{radio4}})</el-header>
      <el-main>
        <el-radio-group v-model="radio4">
          <el-radio label="北京" border disabled></el-radio>
          <el-radio label="广州" border></el-radio>
          <el-radio label="上海" border></el-radio>
          <el-radio label="深圳" border></el-radio>
        </el-radio-group>
      </el-main>
      <el-main>
        <el-radio-group v-model="radio4" disabled style="margin-top:5px;">
          <el-radio label="北京" border disabled></el-radio>
          <el-radio label="广州" border></el-radio>
          <el-radio label="上海" border></el-radio>
          <el-radio label="深圳" border></el-radio>
        </el-radio-group>
      </el-main>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "我不知道",
      radio1: "这不是废话吗",
      radio3: 6,
      radio4: "广州"
    };
  },
  watch: {
    radio() {
      console.log(this.radio);
    },
    radio1() {
      console.log(this.radio);
    }
  }
};
</script>

<style scoped>
section {
  margin-bottom: 40px;
}
</style>