import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
// import Oya from './Oya.vue'

Vue.config.productionTip = false


  // /* /* // Your web app's Firebase configuration
  
  //  firebaseダウンロード
  var firebaseConfig = {
    apiKey: "AIzaSyD9mQvIi0KGJWSbvQc6QGDiUm7WpjND11Y",
    authDomain: "yuri-vue-project.firebaseapp.com",
    projectId: "yuri-vue-project",
    storageBucket: "yuri-vue-project.appspot.com",
    messagingSenderId: "272434506900",
    appId: "1:272434506900:web:0b7ca040aeb0ffe02e1881",
    measurementId: "G-E3KY4CDB6V"
  };
//  {/* // Initialize Firebase */ }

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
