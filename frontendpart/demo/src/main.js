import Vue from 'vue'
import App from './App.vue'
import router from './router'


import store from './store/store.js'

Vue.config.productionTip = false



// const store = new Vuex.Store(
//     {
//         state: {
//             authenticated: false
//         },
//         mutations: {
//             setAuthentication(state, status) {
//                 state.authenticated = status;
//             }
//         }
//     }
// );


new Vue({
  router,
  render: h => h(App),
  store: store,

}).$mount('#app')
