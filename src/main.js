import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/obsidian.css'

Vue.config.productionTip = false

Vue.use(VueHighlightJS)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
