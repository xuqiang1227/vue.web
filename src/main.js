// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/Index'
import VueI18n from 'vue-i18n'
import VueResource from 'vue-resource'

Vue.use(VueI18n)
Vue.use(VueResource)
Vue.http.options.root = '/v1/api'

const i18n = new VueI18n({
  ...store.state.i18n
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: {App}
})
