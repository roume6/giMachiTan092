import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index.js';
import './assets/style/common.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// ...

Vue.component('fa-icon', FontAwesomeIcon)
Vue.config.productionTip = false
library.add(fas, far, fab)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
