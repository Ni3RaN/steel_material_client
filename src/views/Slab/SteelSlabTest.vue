<template>
  <div>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item>成锭率数据</el-breadcrumb-item>
      <el-breadcrumb-item>查看预测数据</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider />
    <el-table :data="tableData">
      <el-table-column fixed prop="id" label="序号" width="100"/>
      <el-table-column prop="l" label="成锭率" width="150"/>
      <el-table-column prop="cs_mm" label="废钢投入量" width="150"/>
      <el-table-column prop="fs_mm" label="返回合金钢" width="150"/>
      <el-table-column prop="mn_mm" label="碳素钢" width="150"/>
      <el-table-column prop="cl_sm" label="表面质量：结疤" width="150"/>
      <el-table-column prop="out_te" label="钢锭表面：短尺" width="150"/>
      <el-table-column prop="s_el" label="钢锭表面：白点" width="150"/>
      <el-table-column prop="sn_qm" label="钢锭表面其他" width="150"/>
      <el-table-column prop="ud_qm" label="化学成分：Mo" width="150"/>
      <el-table-column prop="ni_qm" label="化学成分：Ni" width="150"/>
      <el-table-column prop="oe_qm" label="化学成分：Mn" width="150"/>
      <el-table-column prop="po_qm" label="化学成分：Cr" width="150"/>
      <el-table-column prop="c_qm" label="化学成分：C" width="150"/>
      <el-table-column prop="si_qm" label="化学成分：Si" width="150"/>
      <el-table-column prop="ws_mm" label="钢锭规格" width="150"/>
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
      let url = 'http://' + document.location.hostname + ':8081/get_slab_steel_test/getPage';
      await axios.post(url)
          .then(function (value) {
            total=value;
          })
      this.total = total.data;
    },

    async getData() {

      let url = 'http://' + document.location.hostname + ':8081/get_slab_steel_test/findByPage?';
      url += 'currentPage=' + this.currentPage;
      url += '&pageSize=' + this.pageSize;
      let res;
      await axios.post(url)
          .then(function (value) {
            res=value;
          })
      this.tableData = res.data;
    },

    async deleteData(id){
      let url = 'http://' + document.location.hostname + ':8081/get_slab_steel_test/deleteById?id=' + id;
      await axios.post(url).then(function (){
        ElMessage({
          message: '删除成功',
          center: true,
          type: 'success',
        });
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
