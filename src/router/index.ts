import { createRouter, createWebHistory } from "vue-router"
import DataDial from "../views/DataDial.vue"
import SteelSlabPre from "../views/SteelSlabPre.vue"
import RolledSteelPre from "../views/RolledSteelPre.vue"
import SteelSlabAdd from "../views/Slab/SteelSlabAdd.vue"
import SteelSlabTest from "../views/Slab/SteelSlabTest.vue"
import SteelSlabTrain from "../views/Slab/SteelSlabTrain.vue"
import RolledSteelAdd from "../views/Rolled/RolledSteelAdd.vue"
import RolledSteelTest from "../views/Rolled/RolledSteelTest.vue"
import RolledSteelTrain from "../views/Rolled/RolledSteelTrain.vue"

const routes = [
  {
    path: '/',
    redirect: '/DataDial'
  },
  {
    path: "/DataDial",
    name: "Data dial",
    component: DataDial,
    meta: {
      title: '数据表盘'
    }
  },
  {
    path: "/SteelSlabPre",
    name: "SteelSlabPre",
    component: SteelSlabPre,
    meta: {
      title: '预测成锭率'
    }
  },
  {
    path: "/RolledSteelPre",
    name: "RolledSteelPre",
    component: RolledSteelPre,
    meta: {
      title: "预测成材率"
    }
  },
  {
    path: "/SteelSlabAdd",
    name: "SteelSlabAdd",
    component: SteelSlabAdd,
    meta: {
      title: "增加训练数据"
    }
  },
  {
    path: "/SteelSlabTest",
    name: "SteelSlabTest",
    component: SteelSlabTest,
    meta: {
      title: "查看预测数据"
    }
  },
  {
    path: "/SteelSlabTrain",
    name: "SteelSlabTrain",
    component: SteelSlabTrain,
    meta: {
      title: "历史预测数据"
    }
  },
  {
    path: "/RolledSteelAdd",
    name: "RolledSteelAdd",
    component: RolledSteelAdd,
    meta: {
      title: "增加训练数据"
    }
  },
  {
    path: "/RolledSteelTest",
    name: "RolledSteelTest",
    component: RolledSteelTest,
    meta: {
      title: "查看预测数据"
    }
  },
  {
    path: "/RolledSteelTrain",
    name: "RolledSteelTrain",
    component: RolledSteelTrain,
    meta: {
      title: "历史预测数据"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;