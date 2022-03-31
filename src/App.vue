<template>
  <div>
    <el-scrollbar :height="w_height">
      <el-container>
        <el-aside :width="w_width">
          <h3 class="mb-2" style="color: #79bbff">钢材综合成材率预测系统</h3>
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
            <el-sub-menu index="1">
              <template #title>
                <span>功能界面</span>
              </template>
              <el-menu-item index="DataDial">
            <span>
              表盘数据
            </span>
              </el-menu-item>
              <el-menu-item index="SteelSlabPre">
            <span>
              预测成锭率
            </span>
              </el-menu-item>
              <el-menu-item index="RolledSteelPre">
            <span>
              预测成材率
            </span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <span>成锭率数据</span>
              </template>
              <el-menu-item index="SteelSlabTrain">
            <span>
              查看历史数据
            </span>
              </el-menu-item>
              <el-menu-item index="SteelSlabTest">
            <span>
                查看预测数据
            </span>
              </el-menu-item>
              <el-menu-item index="SteelSlabAdd">
            <span>
                添加训练数据
            </span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <span>成材率数据</span>
              </template>
              <el-menu-item index="RolledSteelTrain">
            <span>
              查看历史数据
            </span>
              </el-menu-item>
              <el-menu-item index="RolledSteelTest">
            <span>
              查看预测数据
            </span>
              </el-menu-item>
              <el-menu-item index="RolledSteelAdd">
            <span>
              添加训练数据
            </span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>

        </el-aside>
        <el-container>
          <el-main>
            <router-view v-wechat-title="$route.meta.title"></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
let w_height = document.documentElement.clientHeight - 25;
let w_width = document.documentElement.clientWidth;
</script>