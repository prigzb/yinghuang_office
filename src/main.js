// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: require('./assets/404.png'),
  loading: require('./assets/loading.png')
})
// import mlUI from 'ml-ui'
// import 'ml-ui/styles/index.css'
// import vuePicturePreview from 'vue-picture-preview'
// Vue.use(vuePicturePreview)

Vue.config.productionTip = false
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)
var options = {
  fullscreenEl: false //关闭全屏按钮
}

Vue.use(vuePhotoPreview, options)
Vue.use(ElementUI)
// Vue.use(mlUI)
// import { IView } from 'ml-ui'

// Vue.component(Tab)
// Vue.component(IView.name, IView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App)
})
