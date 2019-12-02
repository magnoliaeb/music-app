import Vue from 'vue'
import App from './App.vue'
import EvenBus from '@/plugins/event-bus'
import { msToMm } from './filters/ms-to-mm'
import { blur } from './directives/blur'
import { router } from '@/router'

Vue.config.productionTip = false

Vue.use(msToMm)
Vue.use(EvenBus)
Vue.use(blur)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
