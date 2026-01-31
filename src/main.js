import './assets/main.css'

import { createApp } from 'vue'
import {store} from './store'
import App from './App.vue'

import router from './router'
import {vuetify} from './plugins/vuetify.js'

createApp(App).use(router).use(vuetify).use(store).mount('#app')

