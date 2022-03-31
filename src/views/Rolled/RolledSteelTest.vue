<template>
  <div>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item>成材率数据</el-breadcrumb-item>
      <el-breadcrumb-item>查看预测数据</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider />
    <el-table :data="tableData">
      <el-table-column fixed prop="id" label="序号" width="100"/>
      <el-table-column prop="rc" label="成材率" width="150"/>
      <el-table-column prop="x32" label="检验结果值允许的偏差范围" width="200"/>
      <el-table-column prop="x33" label="检验项目：非金属夹杂物" width="200"/>
      <el-table-column prop="x34" label="检验项目：显微组织" width="150"/>
      <el-table-column prop="x35" label="检验项目：力学性能" width="150"/>
      <el-table-column prop="x36" label="检验项目：低倍组织" width="150"/>
      <el-table-column prop="x31" label="成材组距" width="150"/>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button
              type="text"
              size="small"
              @click.prevent="deleteRow(scope.row.id,scope.$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :pager-count="7"
        layout="prev, pager, next"
        :total="total"
        style="float: right;"
    />
  </div>
</template>
<script lang="js">

import axios from "axios";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      tableData: [],
      total: 0,
      pageSize: 20,
      currentPage: 1
    };
  },
  methods: {
    async getTotal(){
      let total;
      let url = 'http://' + document.location.hostname + ':8081/get_rolled_steel_test/getPage';
      await axios.post(url)
          .then(function (value) {
            total=value;
          })
          .catch(function (reason) {
            ElMessage({
              message: reason,
              center: true,
              type: 'error',
            });
          });
      this.total = total.data;
    },

    async getData() {

      let url = 'http://' + document.location.hostname + ':8081/get_rolled_steel_test/findByPage?';
      url += 'currentPage=' + this.currentPage;
      url += '&pageSize=' + this.pageSize;
      let res;
      await axios.post(url)
          .then(function (value) {
            res=value;
          })
          .catch(function (reason) {
            ElMessage({
              message: reason,
              center: true,
              type: 'error',
            });
          });
      this.tableData = res.data;
    },

    async deleteData(id){
      let url = 'http://' + document.location.hostname + ':8081/get_rolled_steel_test/deleteById?id=' + id;
      await axios.post(url).then(function (){
        ElMessage({
          message: '删除成功',
          center: true,
          type: 'success',
        });
        this.getData();
        this.getTotal();
      })
          .catch(function (reason) {
            ElMessage({
              message: reason,
              center: true,
              type: 'error',
            });
          });
      this.getData();
      this.getTotal();
    },

    init() {
      this.getData();
      this.getTotal();
    },

    deleteRow(id,index) {
      this.deleteData(id);
      this.tableData.splice(index, 1);
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData();
      // console.log(`current page: ${val}`);
    },
  },
  mounted() {
    this.init();
  }
}


</script>