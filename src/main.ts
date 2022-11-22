import { createApp } from 'vue'
// global styles
import './styles/index.less'
// temporarily icons setup
import { setupEleIcon } from '@/plugins/element-icon'
import App from './App.vue'


const app = createApp(App)

setupEleIcon(app)

app.mount('#app')
