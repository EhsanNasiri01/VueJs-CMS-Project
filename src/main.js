import './assets/main.css'

import { createApp } from 'vue'
import {store} from './store'
import App from './App.vue'

import router from './router'
import {vuetify} from './plugins/vuetify.js'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


createApp(App).use(router).use(vuetify).use(store).use(Toast,{rtl:true}).mount('#app')

