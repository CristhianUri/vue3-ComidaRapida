import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'


import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';



const myApp = createApp(App);

myApp.mount('#app')