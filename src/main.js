import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDZGuBElAxxk_osHG-FRwg2kckFeC31iEM",
  authDomain: "react-c372f.firebaseapp.com",
  databaseURL: "https://react-c372f-default-rtdb.firebaseio.com",
  projectId: "react-c372f",
  storageBucket: "react-c372f.appspot.com",
  messagingSenderId: "513514118554",
  appId: "1:513514118554:web:b269e33d2ce8ced29c6e23",
  measurementId: "G-E51Z0CS9F4"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
