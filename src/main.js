import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedState))

app.mount('#app')

