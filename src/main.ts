import { createApp } from 'vue'
import VueWechatTitle from 'vue-wechat-title'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
import * as echarts from 'echarts';
import App from './App.vue'
import router from './router'


const app = createApp(App);
app.use(VueWechatTitle);
app.use(ElementPlus);
app.use(router);
app.config.globalProperties.$echarts = echarts;
for (const name in ElIcons){
    app.component(name,(ElIcons as never)[name])
}
app.mount('#app');
