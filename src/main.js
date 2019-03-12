// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload' //移动端图片加载插件
import MintUI from 'mint-ui' //UI组件库
import 'mint-ui/lib/style.css'


Vue.config.productionTip = false

Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './src/assets/imgs/fail.png',
  loading: './src/assets/imgs/loading.gif',
  attempt: 1
}) 
Vue.use(MintUI) 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
