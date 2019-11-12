<template>
  <div class="homelist">
    <el-table
      :data="tableData"
      height="100%"
      border
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column type="index" label="序号" align="center" width="180"></el-table-column>
      <el-table-column prop="address" align="center" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-03",
      name: "王小虎",
      province: "上海",
      city: "普陀区",
      address: "上海市普陀区金沙江路 1518 弄",
      zip: 200333
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0 || row >= 0) {
        return "warning-row";
      }
      //  else if (rowIndex % 2 === 1) {
      //   return "success-row";
      // }
      return "";
    }
  }
};
</script>

<style scoped>
.homelist {
  height: 100%;
}
</style>