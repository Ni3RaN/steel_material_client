<template>
  <div>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item>功能界面</el-breadcrumb-item>
      <el-breadcrumb-item>数据表盘</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider />
    <el-col :span="19">
    <div id="main1" class="scrollbar-demo-item"></div>
    <div id="main2" class="scrollbar-demo-item"></div>
    <div id="main3" class="scrollbar-demo-item"></div>
    <div id="main4" class="scrollbar-demo-item"></div>
    </el-col>
  </div>
</template>

<script lang="js">
import * as echarts from "echarts";
import axios from "axios";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      datas1: [],
      datas2: [],
      datas3: [],
      datas4: [],
      t_size: 0,
    };
  },
  methods: {
    myecharts() {
      document.getElementById('main1').removeAttribute('_echarts_instance_');
      document.getElementById('main2').removeAttribute('_echarts_instance_');
      document.getElementById('main3').removeAttribute('_echarts_instance_');
      document.getElementById('main4').removeAttribute('_echarts_instance_');
      var mycharts1 = echarts.init(document.getElementById('main1'), 'dark');
      var mycharts2 = echarts.init(document.getElementById('main2'), 'dark');
      var mycharts3 = echarts.init(document.getElementById('main3'), 'dark');
      var mycharts4 = echarts.init(document.getElementById('main4'), 'dark');
      const schema1 = [
        {name: 'U', index: 0, text: '序号'},
        {name: 'L', index: 1, text: '成锭率'},
        {name: 'CS_MM', index: 2, text: '废钢投入量'},
        {name: 'FS_MM', index: 3, text: '返回合金钢'},
        {name: 'Mn_MM', index: 4, text: '碳素钢'},
        {name: 'CL_SM', index: 5, text: '表面质量：结疤'},
        {name: 'Out_TE', index: 6, text: '钢锭表面：短尺'},
        {name: 'S_EL', index: 7, text: '钢锭表面：白点'},
        {name: 'SN_QM', index: 8, text: '钢锭表面其他'},
        {name: 'UD_QM', index: 9, text: '化学成分：Mo'},
        {name: 'NI_QM', index: 10, text: '化学成分：Ni'},
        {name: 'OE_QM', index: 11, text: '化学成分：Cr'},
        {name: 'PO_QM', index: 12, text: '化学成分：Mn'},
        {name: 'C_QM', index: 13, text: '化学成分：C'},
        {name: 'SI_QM', index: 14, text: '化学成分：Si'},
        {name: 'WS_MM', index: 15, text: '钢锭规格'},
      ];
      const schema2 = [
        {name: 'U', index: 0, text: '序号'},
        {name: 'Rs', index: 1, text: '成材率'},
        {name: 'X31', index: 2, text: '检验结果值允许的偏差范围'},
        {name: 'X32', index: 3, text: '检验项目：非金属夹杂物'},
        {name: 'X33', index: 4, text: '检验项目：显微组织'},
        {name: 'X34', index: 5, text: '检验项目：力学性能'},
        {name: 'X35', index: 6, text: '检验项目：低倍组织'},
        {name: 'X36', index: 7, text: '成材组距'},
      ];
      const itemStyle = {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.3)'
      };
      var option1 = {
        backgroundColor: '#FFFFFF',
        title: {
          text: '历史成锭率',
          left: 'center',
          top: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc',
          borderWidth: 0,
          padding: 15,

          itemGap: 10,
          textStyle: {
            fontSize: 25,
            fontWeight: 'bolder',
            color: '#337ecc'
          },
          subtextStyle: {
            color: '#aaa'
          }
        },
        visualMap: {
          min: 0.6,
          max: 1,
          precision: 3,
          dimension: 1,
          orient: 'vertical',
          right: 5,
          top: 'center',
          text: ['HIGH', 'LOW'],
          calculable: true,
          inRange: {
            color: ['red', 'lightgreen']
          }
        },
        tooltip: {
          backgroundColor: '#f4f4f5',
          position: 'bottom',
          formatter: function (param) {
            var value = param.value;
            return '<div style="border-bottom: 1px solid #409EFF; font-size: 18px;padding-bottom: 5px;margin-bottom: 5px;">'
                + '序号：' + value[0]
                + '</div>'
                + schema1[1].text + '：' + value[1] + '<br>'
                + schema1[2].text + '：' + value[2] + '<br>'
                + schema1[3].text + '：' + value[3] + '<br>'
                + schema1[4].text + '：' + value[4] + '<br>'
                + schema1[5].text + '：' + value[5] + '<br>'
                + schema1[6].text + '：' + value[6] + '<br>'
                + schema1[7].text + '：' + value[7] + '<br>'
                + schema1[8].text + '：' + value[8] + '<br>'
                + schema1[9].text + '：' + value[9] + '<br>'
                + schema1[10].text + '：' + value[10] + '<br>'
                + schema1[11].text + '：' + value[11] + '<br>'
                + schema1[12].text + '：' + value[12] + '<br>'
                + schema1[13].text + '：' + value[13] + '<br>'
                + schema1[14].text + '：' + value[14] + '<br>'
                + schema1[15].text + '：' + value[15] + '<br>'
          }
        },

        xAxis: {
          type: 'value',
          name: '序号',
          nameGap: 25,
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 16,
            fontStyle: 'oblique',
            color: '#409EFF',
            fontWeight: '20',
            fontFamily: 'Arial',

          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#409EFF',
              fontSize: '12'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF',
            }
          },

          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          name: '成锭率',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            fontSize: 16,
            fontStyle: 'oblique',
            color: '#409EFF',
            fontWeight: '20',
            fontFamily: 'Arial',
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#409EFF',
              fontSize: '12'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF',
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            type: 'scatter',
            itemStyle: itemStyle,
            data: this.datas1,
          },
        ]
      };
      var option2 = {
        backgroundColor: '#FFFFFF',
        title: {
          text: '预测成锭率',
          left: 'center',
          top: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc',
          borderWidth: 0,
          padding: 15,

          itemGap: 10,
          textStyle: {
            fontSize: 25,
            fontWeight: 'bolder',
            color: '#337ecc'
          },
          subtextStyle: {
            color: '#aaa'
          }
        },
        visualMap: {
          min: 0.6,
          max: 1,
          precision: 3,
          dimension: 1,
          orient: 'vertical',
          right: 5,
          top: 'center',
          text: ['HIGH', 'LOW'],
          calculable: true,
          inRange: {
            color: ['red', 'lightgreen']
          }
        },
        tooltip: {
          backgroundColor: '#f4f4f5',
          position: 'bottom',
          formatter: function (param) {
            var value = param.value;
            return '<div style="border-bottom: 1px solid #409EFF; font-size: 18px;padding-bottom: 5px;margin-bottom: 5px;">'
                + '序号：' + value[0]
                + '</div>'
                + schema1[1].text + '：' + value[1] + '<br>'
                + schema1[2].text + '：' + value[2] + '<br>'
                + schema1[3].text + '：' + value[3] + '<br>'
                + schema1[4].text + '：' + value[4] + '<br>'
                + schema1[5].text + '：' + value[5] + '<br>'
                + schema1[6].text + '：' + value[6] + '<br>'
                + schema1[7].text + '：' + value[7] + '<br>'
                + schema1[8].text + '：' + value[8] + '<br>'
                + schema1[9].text + '：' + value[9] + '<br>'
                + schema1[10].text + '：' + value[10] + '<br>'
                + schema1[11].text + '：' + value[11] + '<br>'
                + schema1[12].text + '：' + value[12] + '<br>'
                + schema1[13].text + '：' + value[13] + '<br>'
                + schema1[14].text + '：' + value[14] + '<br>'
                + schema1[15].text + '：' + value[15] + '<br>'
          }
        },

        xAxis: {
          type: 'value',
          name: '序号',
          nameGap: 25,
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 16,
            fontStyle: 'oblique',
            color: '#409EFF',
            fontWeight: '20',
            fontFamily: 'Arial',

          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#409EFF',
              fontSize: '12'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF',
            }
          },

          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          name: '成锭率',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            fontSize: 16,
            fontStyle: 'oblique',
            color: '#409EFF',
            fontWeight: '20',
            fontFamily: 'Arial',
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#409EFF',
              fontSize: '12'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF',
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            type: 'scatter',
            itemStyle: itemStyle,
            data: this.datas2
          },
        ]
      };
      var option3 = {
        backgroundColor: '#FFFFFF',
        title: {
          text: '历史成材率',
          left: 'center',
          top: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc',
          borderWidth: 0,
          padding: 15,

          itemGap: 10,
          textStyle: {
            fontSize: 25,
            fontWeight: 'bolder',
            color: '#337ecc'
          },
          subtextStyle: {
            color: '#aaa'
          }
        },
        visualMap: {
          min: 0.6,
          max: 1,
          precision: 3,
          dimension: 1,
          orient: 'vertical',
          right: 5,
          top: 'center',
          text: ['HIGH', 'LOW'],
          calculable: true,
          inRange: {
            color: ['red', 'lightgreen']
          }
        },
        tooltip: {
          backgroundColor: '#f4f4f5',
          position: 'bottom',
          formatter: function (param) {
            var value = param.value;
            return '<div style="border-bottom: 1px solid #409EFF; font-size: 18px;padding-bottom: 5px;margin-bottom: 5px;">'
                + '序号：' + value[0]
                + '</div>'
                + schema2[1].text + '：' + value[1] + '<br>'
                + schema2[2].text + '：' + value[2] + '<br>'
                + schema2[3].text + '：' + value[3] + '<br>'
                + schema2[4].text + '：' + value[4] + '<br>'
                + schema2[5].text + '：' + value[5] + '<br>'
                + schema2[6].text + '：' + value[6] + '<br>'
                + schema2[7].text + '：' + value[7] + '<br>'
          }
        },

        xAxis: {
          type: 'value',
          name: '序号',
          nameGap: 25,
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 16,
            fontStyle: 'oblique',
            color: '#409EFF',
            fontWeight: '20',
            fontFamily: 'Arial',

          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#409EFF',
              fontSize: '12'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF',
            }
          },

          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          name: '成材率',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            fontSize: 16,
            fontStyle: 'oblique',
            color: '#409EFF',
            fontWeight: '20',
            fontFamily: 'Arial',
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#409EFF',
              fontSize: '12'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF',
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            type: 'scatter',
            itemStyle: itemStyle,
            data: this.datas3
          },
        ]
      };
      var option4 = {
        backgroundColor: '#FFFFFF',
        title: {
          text: '预测成材率',
          left: 'center',
          top: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc',
          borderWidth: 0,
          padding: 15,

          itemGap: 10,
          textStyle: {
            fontSize: 25,
            fontWeight: 'bolder',
            color: '#337ecc'
          },
          subtextStyle: {
            color: '#aaa'
          }
        },
        visualMap: {
          min: 0.6,
          max: 1,
          precision: 3,
          dimension: 1,
          orient: 'vertical',
          right: 5,
          top: 'center',
          text: ['HIGH', 'LOW'],
          calculable: true,
          inRange: {
            color: ['red', 'lightgreen']
          }
        },
        tooltip: {
          backgroundColor: '#f4f4f5',
          position: 'bottom',
          formatter: function (param) {
            var value = param.value;
            return '<div style="border-bottom: 1px solid #409EFF; font-size: 18px;padding-bottom: 5px;margin-bottom: 5px;">'
                + '序号：' + value[0]
                + '</div>'
                + schema2[1].text + '：' + value[1] + '<br>'
                + schema2[2].text + '：' + value[2] + '<br>'
                + schema2[3].text + '：' + value[3] + '<br>'
                + schema2[4].text + '：' + value[4] + '<br>'
                + schema2[5].text + '：' + value[5] + '<br>'
                + schema2[6].text + '：' + value[6] + '<br>'
                + schema2[7].text + '：' + value[7] + '<br>'
          }
        },

        xAxis: {
          type: 'value',
          name: '序号',
          nameGap: 25,
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 16,
            fontStyle: 'oblique',
            color: '#409EFF',
            fontWeight: '20',
            fontFamily: 'Arial',
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#409EFF',
              fontSize: '12'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF',
            }
          },

          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          name: '成材率',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            fontSize: 16,
            fontStyle: 'oblique',
            color: '#409EFF',
            fontWeight: '20',
            fontFamily: 'Arial',
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#409EFF',
              fontSize: '12'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF',
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            type: 'scatter',
            itemStyle: itemStyle,
            data: this.datas4,
          },
        ]
      };
      mycharts1.setOption(option1);
      mycharts2.setOption(option2);
      mycharts3.setOption(option3);
      mycharts4.setOption(option4);
      window.onresize = function () { // 自适应大小
        mycharts1.resize();
        mycharts2.resize();
        mycharts3.resize();
        mycharts4.resize();
      };
    },
    async getData() {
      let data;
      let arr = [];
      let url;
      url = 'http://' + document.location.hostname + ':8081/get_slab_steel_train/findAll';
      await axios.post(url)
          .then(function (value) {
            data = value.data;
          })
          .catch(function (reason) {
            ElMessage({
              message: reason,
              center: true,
              type: 'error',
            });
          });
      arr = [];
      for (let i = 0; i < data.length; i++) {
        arr[i] = [];
        arr[i][0] = data[i].id;
        arr[i][1] = data[i].l;
        arr[i][2] = data[i].cs_mm;
        arr[i][3] = data[i].fs_mm;
        arr[i][4] = data[i].mn_mm;
        arr[i][5] = data[i].cl_sm;
        arr[i][6] = data[i].out_te;
        arr[i][7] = data[i].s_el;
        arr[i][8] = data[i].sn_qm;
        arr[i][9] = data[i].ud_qm;
        arr[i][10] = data[i].ni_qm;
        arr[i][11] = data[i].oe_qm;
        arr[i][12] = data[i].po_qm;
        arr[i][13] = data[i].c_qm;
        arr[i][14] = data[i].si_qm;
        arr[i][15] = data[i].ws_mm;
      }
      this.datas1 = arr;

      url = 'http://' + document.location.hostname + ':8081/get_slab_steel_test/findAll';
      await axios.post(url)
          .then(function (value) {
            data = value.data;
          })
          .catch(function (reason) {
            ElMessage({
              message: reason,
              center: true,
              type: 'error',
            });
          });
      arr = [];
      for (let i = 0; i < data.length; i++) {
        arr[i] = [];
        arr[i][0] = data[i].id;
        arr[i][1] = data[i].l;
        arr[i][2] = data[i].cs_mm;
        arr[i][3] = data[i].fs_mm;
        arr[i][4] = data[i].mn_mm;
        arr[i][5] = data[i].cl_sm;
        arr[i][6] = data[i].out_te;
        arr[i][7] = data[i].s_el;
        arr[i][8] = data[i].sn_qm;
        arr[i][9] = data[i].ud_qm;
        arr[i][10] = data[i].ni_qm;
        arr[i][11] = data[i].oe_qm;
        arr[i][12] = data[i].po_qm;
        arr[i][13] = data[i].c_qm;
        arr[i][14] = data[i].si_qm;
        arr[i][15] = data[i].ws_mm;
      }
      this.datas2 = arr;
      url = 'http://' + document.location.hostname + ':8081/get_rolled_steel_train/findAll';
      await axios.post(url)
          .then(function (value) {
            data = value.data;
          })
          .catch(function (reason) {
            ElMessage({
              message: reason,
              center: true,
              type: 'error',
            });
          });
      arr = [];
      for (let i = 0; i < data.length; i++) {
        arr[i] = [];
        arr[i][0] = data[i].id;
        arr[i][1] = data[i].rc;
        arr[i][2] = data[i].x31;
        arr[i][3] = data[i].x32;
        arr[i][4] = data[i].x33;
        arr[i][5] = data[i].x34;
        arr[i][6] = data[i].x35;
        arr[i][7] = data[i].x36;
      }
      this.datas3 = arr;
      url = 'http://' + document.location.hostname + ':8081/get_rolled_steel_test/findAll';
      await axios.post(url)
          .then(function (value) {
            data = value.data;
          })
          .catch(function (reason) {
            ElMessage({
              message: reason,
              center: true,
              type: 'error',
            });
          });
      arr = [];
      for (let i = 0; i < data.length; i++) {
        arr[i] = [];
        arr[i][0] = data[i].id;
        arr[i][1] = data[i].rc;
        arr[i][2] = data[i].x31;
        arr[i][3] = data[i].x32;
        arr[i][4] = data[i].x33;
        arr[i][5] = data[i].x34;
        arr[i][6] = data[i].x35;
        arr[i][7] = data[i].x36;
      }
      this.datas4 = arr;
    },
  },
  async mounted() {
    this.t_size = document.documentElement.clientWidth*0.4;
    console.log(this.t_size);
    const main1 = document.getElementById('main1');
    main1.style.height = this.t_size+'px';
    main1.style.width = this.t_size+'px';
    const main2 = document.getElementById('main2');
    main2.style.height = this.t_size+'px';
    main2.style.width = this.t_size+'px';
    const main3 = document.getElementById('main3');
    main3.style.height = this.t_size+'px';
    main3.style.width = this.t_size+'px';
    const main4 = document.getElementById('main4');
    main4.style.height = this.t_size+'px';
    main4.style.width = this.t_size+'px';
    await this.getData();
    this.myecharts();
  },
}

</script>

<style scoped>

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>