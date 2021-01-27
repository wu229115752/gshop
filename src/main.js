// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './fiters'

Vue.config.productionTip = false
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyload, {
  loading: loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
