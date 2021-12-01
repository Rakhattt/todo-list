import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate/src'
import firebase from 'firebase/compat'
import './less/style.less'

Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  router,
  store,
  render: h => h(App),

  created () {
    // eslint-disable-next-line no-unused-vars
    firebase.initializeApp({
      apiKey: 'AIzaSyBMky2fVsG6EuU73UpIMIoeM7tRT34JNww',
      authDomain: 'itc-ads-2400e.firebaseapp.com',
      projectId: 'itc-ads-2400e',
      storageBucket: 'itc-ads-2400e.appspot.com',
      messagingSenderId: '216204408020',
      appId: '1:216204408020:web:72d7b5133790e832c8f741',
      measurementId: 'G-Z22GFXHM1P'
    })
    this.$store.dispatch('fetchTask')
  }
}).$mount('#app')
