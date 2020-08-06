import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

// axios({
//   method: 'get',
//   url: 'http://123.207.32.32:8080/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params:{
//     type: 'sell',
//     page: 5
//   }
// })]).then(results => {
//   console.log(results);
// })
