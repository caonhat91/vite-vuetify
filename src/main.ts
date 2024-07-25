import './style.scss'
import { createApp, readonly, watchPostEffect } from 'vue'
import App from './App.vue'
import vuetify from '@plugins/vuetify/Vuetify'
import I18n from '@plugins/i18n/I18n'
import router from '@plugins/router/router'
import Pinia from '@plugins/pinia/Pinia'

const VUE = createApp(App)

VUE.use(I18n)
VUE.use(vuetify)
VUE.use(Pinia)
VUE.use(router)

VUE.config.globalProperties.$env = readonly(import.meta.env)
VUE.config.performance = true

watchPostEffect(() => {
    document.title = VUE.config.globalProperties.$env.VITE_APP_TITLE
    document.documentElement.lang = VUE.config.globalProperties.$i18n.locale
});

VUE.mount('#app')
