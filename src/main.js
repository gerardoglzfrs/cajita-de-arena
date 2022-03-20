import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrapVue from './plugins/bootstrap-vue'
import global from './assets/global.css'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router,
  store,
  global,
  bootstrapVue,
  VueBootstrapTypeahead
}).$mount('#app')
