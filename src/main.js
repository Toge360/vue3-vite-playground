import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
.use(router)
.use(store)
.use(VueAxios, axios)
.mount('#app')

