import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import router from './router'
import 'vue-cesium/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCesium)
app.mount('#app')
