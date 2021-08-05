import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

const initialState = {
  login_user: null,  
  todos:[],
  userExist:false,  
}

export default new Vuex.Store({
  state: initialState,
  mutations: {    
    addAddress(state, address){           
      state.addresses.push(address);
    },
    deleteAddress(state){     
      state.addresses =[]      
    },
    addMyAddress(state, address){   
      state.userExist = true;        
      state.myaddresses = address;
    },
    updateMyAddress(state, address){
      state.myaddresses = address ;
    },
    setLoginUser(state, user){
      state.login_user = user //ログインユーザー情報をstateのlogin_userにセット
    },
    deleteLoginUser(state){
      state.login_user = null //ログインユーザー情報(stateのlogin_user)を空にする
    },
  },
  actions: {
    toggleSideMenu({ commit }){
      commit("toggleSideMenu")
    },
    setLoginUser({ commit }, user){
      commit('setLoginUser', user) //mutationのログイン情報登録を呼び出し
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
      window.localStorage.removeItem('vuex');
    },
    logout() {
      firebase.auth().signOut()
      window.localStorage.removeItem('vuex');
    },
    deleteLoginUser({ commit }){
      commit('deleteLoginUser') //mutationのログイン情報削除の呼び出し
    },
    fetchAddresses({ commit, getters }){
      commit('deleteAddress')
      firebase.firestore().collection(`users`).get().then( querySnapshot => {                
        querySnapshot.forEach( doc => {
          if( doc.id == getters.uid ){ commit('addMyAddress', doc.data() ); }
          else{ commit('fetchAddress', doc.data() ) }
        })        
      })
    },
  },
  getters:{
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',    
    uid: state => state.login_user ? state.login_user.uid : null,    
    getAddress: state => state.login_user ? state.addresses : {},
    getMyAddress: state => state.login_user ? state.myaddresses : {},        
  },
})