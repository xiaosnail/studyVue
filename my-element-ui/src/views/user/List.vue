<template>
  <div>
    <h1>我是用户列表 {{ id }} {{ name }}</h1>
    <button @click="getId()">点击获取选中的ID</button>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      @selection-change="handleSelectionChange"
      empty-text="暂无数据"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="date_time" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="json_date" label="json"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["id", "name"],
  name: "UserList",
  data() {
    return {
      tableData: [
        // {
        //   id: 1,
        //   date_time: "2016-05-02",
        //   title: "王小虎",
        //   json_date: "上海市普陀区金沙江路 1518 弄",
        // },
      ],
      multipleSelection: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log("list- 路由进入渲染页面前执行!");
    next((vm) => {
      vm.getShow();
    });
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleSelectionChange(val) {
      console.log("val--" + val.id);
      this.multipleSelection = val;
    },
    getShow() {
      var thist = this;
      this.axios
        .get("http://www.lumenapi.com/show", {
          params: {
            id: this.id,
          },
        })
        .then(function (response) {
          //接受值
          thist.tableData = response.data.data;
          // console.log(name);
          console.log(response.data.data);
          // console.log(response.data.data[0].title);
        });
      console.log(this.name);
    },
    getId() {
      var halo = [];
      for (var i = 0; i < this.multipleSelection.length; i++) {
        // var halo = this.multipleSelection[i];
        halo.push(this.multipleSelection[i].id);
        // console.log(halo);
      }
      console.log(halo);
      // console.log(this.multipleSelection.length);
    },
  },
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>