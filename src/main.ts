import { createApp } from 'vue'
import { createPinia } from 'pinia'
// global styles
import './styles/index.css'
// windi css config
import 'virtual:windi.css'
// animate css
import 'animate.css'
// router
import router from './router'

import App from './App.vue'

const app = createApp(App)
app.use(createPinia()).use(router)

app.mount('#app')
