import Vue from 'vue'
import App from './App.vue'

// import QEWD from the qewd-client
import { QEWD } from 'qewd-client'

// add QEWD as a global property
// now you can use QEWD in all your app components as `this.$qewd.reply(...)`
Vue.prototype.$qewd = QEWD

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
