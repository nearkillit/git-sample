import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//   apiKey: "AIzaSyCT-wpAnNnEdHJSyWgDF1md0sSD0RXX4-E",
//   authDomain: "react-0516.firebaseapp.com",
//   databaseURL: "https://react-0516-default-rtdb.firebaseio.com",
//   projectId: "react-0516",
//   storageBucket: "react-0516.appspot.com",
//   messagingSenderId: "126593299249",
//   appId: "1:126593299249:web:0e74033b777070d0b47610",
//   measurementId: "G-BXFHFXN1TQ"
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
