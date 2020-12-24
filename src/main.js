import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/axios/http'

Vue.prototype.$http = axios
Vue.config.productionTip = false
let grid = JSON.parse(window.localStorage.getItem('grid'))
if(grid){
  store.commit('setGrid',grid)
}

let defalt = JSON.parse(window.localStorage.getItem('defaltArr'))
if(defalt){
  store.commit('setDefalt',defalt)
}

let title = JSON.parse(window.localStorage.getItem('titleArr'))
if(title){
  store.commit('setTitle',title)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
