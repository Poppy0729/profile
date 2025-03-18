import 'vuetify/styles'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { vuetify } from './plugins/vuetify'
import router from './router'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import '@/styles/tailwind.css'
import '@mdi/font/css/materialdesignicons.css'

const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

createApp(App)
    .use(router)
    .use(pinia)
    .use(vuetify)
    .mount('#app')
