import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const pinia = createPinia();
const app = createApp(App);


app.use(Antd).use(router).use(pinia).mount('#app')
