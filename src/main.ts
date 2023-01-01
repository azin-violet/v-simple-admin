import { createApp } from 'vue'
import { createPinia } from 'pinia'
// global styles
import './styles/index.less'
// temporarily icons setup
import { setupEleIcon } from '@/plugins/element-icon'
// windi css config
import 'virtual:windi.css'

import App from './App.vue'


const app = createApp(App)
app.use(createPinia())

setupEleIcon(app)

app.mount('#app')
