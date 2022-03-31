<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="200px"
      class="demo-ruleForm"
      :size="formSize">
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item>成材率数据</el-breadcrumb-item>
      <el-breadcrumb-item>添加训练数据</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider />
    <el-space wrap style="padding: 20px">
      <el-form-item label="成材组距" prop="x31" required>
        <el-input v-model="ruleForm.x31"/>
      </el-form-item>
      <el-form-item label="检验结果值允许的偏差范围" prop="x32" required>
        <el-input v-model="ruleForm.x32"/>
      </el-form-item>
      <el-form-item label="检验项目：非金属夹杂物" prop="x33" required>
        <el-input v-model="ruleForm.x33"/>
      </el-form-item>
      <el-form-item label="检验项目：显微组织" prop="x34" required>
        <el-input v-model="ruleForm.x34"/>
      </el-form-item>
      <el-form-item label="检验项目：力学性能" prop="x35" required>
        <el-input v-model="ruleForm.x35"/>
      </el-form-item>
      <el-form-item label="检验项目：低倍组织" prop="x36" required>
        <el-input v-model="ruleForm.x36"/>
      </el-form-item>
      <el-form-item label="成材率" prop="rc" required>
        <el-input v-model="ruleForm.rc"/>
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
  x31: '',
  x32: '',
  x33: '',
  x34: '',
  x35: '',
  x36: '',
  rc: '',
});

const rules = reactive({
  x31: [
    { required: true, message: '请输入成材组距' }
  ],
  x32: [
    { required: true, message: '请输入检验结果值允许的偏差范围' }
  ],
  x33: [
    { required: true, message: '请输入非金属夹杂物' }
  ],
  x34: [
    { required: true, message: '请输入显微组织' }
  ],
  x35: [
    { required: true, message: '请输入力学性能' }
  ],
  x36: [
    { required: true, message: '请输入低倍组织' }
  ],
  rc: [
    { required: true, message: '请输入成材率' }
  ],
});


const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      let url = 'http://' + document.location.hostname + ':8081/get_rolled_steel_train/addData';
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
