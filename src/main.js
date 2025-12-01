import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index.js';
import './assets/style/common.css'
import '@mdi/font/css/materialdesignicons.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// ...

// Vue 3: remove Vue.config.productionTip (not available)
library.add(fas, far, fab)

const app = createApp(App)
// register plugins
app.use(vuetify)
app.use(router)
// register global components
app.component('font-awesome-icon', FontAwesomeIcon)

// mount the app
app.mount('#app')
