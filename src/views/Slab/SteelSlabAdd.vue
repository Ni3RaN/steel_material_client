<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="200px"
      class="demo-ruleForm"
      :size="formSize">
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item>成锭率数据</el-breadcrumb-item>
      <el-breadcrumb-item>添加训练数据</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider />
    <el-space wrap style="padding: 20px;">
      <el-form-item label="钢锭规格" prop="ws_mm" required>
        <el-input v-model="ruleForm.ws_mm"/>
      </el-form-item>
      <el-form-item label="废钢投入量" prop="cs_mm" required>
        <el-input v-model="ruleForm.cs_mm"/>
      </el-form-item>
      <el-form-item label="返回合金钢" prop="fs_mm" required>
        <el-input v-model="ruleForm.fs_mm"/>
      </el-form-item>
      <el-form-item label="碳素钢" prop="mn_mm" required>
        <el-input v-model="ruleForm.mn_mm"/>
      </el-form-item>
      <el-form-item label="表面质量：结疤" prop="cl_sm" required>
        <el-input v-model="ruleForm.cl_sm"/>
      </el-form-item>
      <el-form-item label="钢锭表面：短尺" prop="out_te" required>
        <el-input v-model="ruleForm.out_te"/>
      </el-form-item>
      <el-form-item label="钢锭表面：白点" prop="s_el" required>
        <el-input v-model="ruleForm.s_el"/>
      </el-form-item>
      <el-form-item label="钢锭表面其他" prop="sn_qm" required>
        <el-input v-model="ruleForm.sn_qm"/>
      </el-form-item>
      <el-form-item label="化学成分：Mo" prop="ud_qm" required>
        <el-input v-model="ruleForm.ud_qm"/>
      </el-form-item>
      <el-form-item label="化学成分：Ni" prop="ni_qm" required>
        <el-input v-model="ruleForm.ni_qm"/>
      </el-form-item>
      <el-form-item label="化学成分：Cr" prop="oe_qm" required>
        <el-input v-model="ruleForm.oe_qm"/>
      </el-form-item>
      <el-form-item label="化学成分：Mn" prop="po_qm" required>
        <el-input v-model="ruleForm.po_qm"/>
      </el-form-item>
      <el-form-item label="化学成分：C" prop="c_qm" required>
        <el-input v-model="ruleForm.c_qm"/>
      </el-form-item>
      <el-form-item label="化学成分：Si" prop="si_qm" required>
        <el-input v-model="ruleForm.si_qm"/>
      </el-form-item>
      <el-form-item label="成锭率" prop="l" required>
        <el-input v-model="ruleForm.l"/>
      </el-form-item>
    </el-space>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type {FormInstance} from 'element-plus'
import axios from "axios";
import {ElMessage} from "element-plus";

const formSize = ref('default')

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  ws_mm: '',
  cs_mm: '',
  fs_mm: '',
  mn_mm: '',
  cl_sm: '',
  out_te: '',
  s_el: '',
  sn_qm: '',
  ud_qm: '',
  ni_qm: '',
  oe_qm: '',
  po_qm: '',
  c_qm: '',
  si_qm: '',
  l: '',
});

const rules = reactive({
  ws_mm: [
    {required: true, message: '请输入钢锭规格'}
  ],
  cs_mm: [
    {required: true, message: '请输入废钢投入量'}
  ],
  fs_mm: [
    {required: true, message: '请输入返回合金钢'}
  ],
  mn_mm: [
    {required: true, message: '请输入碳素钢'}
  ],
  cl_sm: [
    {required: true, message: '请输入表面质量结疤'}
  ],
  out_te: [
    {required: true, message: '请输入钢锭表面短尺'}
  ],
  s_el: [
    {required: true, message: '请输入钢锭表面白点'}
  ],
  sn_qm: [
    {required: true, message: '请输入钢锭表面其他'}
  ],
  ud_qm: [
    {required: true, message: '请输入化学成分Mo'}
  ],
  ni_qm: [
    {required: true, message: '请输入化学成分Ni'}
  ],
  oe_qm: [
    {required: true, message: '请输入化学成分Cr'}
  ],
  po_qm: [
    {required: true, message: '请输入化学成分Mn'}
  ],
  c_qm: [
    {required: true, message: '请输入化学成分C'}
  ],
  si_qm: [
    {required: true, message: '请输入化学成分Si'}
  ],
  l: [
    {required: true, message: '请输入成锭率'}
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      let url = 'http://' + document.location.hostname + ':8081/get_slab_steel_train/addData';
      await axios.post(url,ruleForm)
          .then(function (){
            ElMessage({
              message: '添加成功',
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
    } else {
      console.log(fields);
      ElMessage({
        message: '添加失败',
        center: true,
        type: 'error',
      });
    }
  });
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
}

</script>