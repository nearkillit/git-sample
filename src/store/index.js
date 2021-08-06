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
    setLoginUser(state, user){
      state.login_user = user //ログインユーザー情報をstateのlogin_userにセット
    },
    deleteLoginUser(state){
      state.login_user = null //ログインユーザー情報(stateのlogin_user)を空にする
    },    
    setTodo( state, todos ){      
      state.todos = todos      
    },
    // // todoEdit(state,{id,address}){
    // //   const index=state.address.findIndex((address)=>
    // //   address.id===id);
    // //   state.address[index]=address
    // }
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
    fetchTodos({ commit, getters }){      
      firebase.firestore().collection(`users`).get().then( querySnapshot => {                
        querySnapshot.forEach( doc => {
          if( doc.id == getters.uid ){ commit('setTodo', doc.data() ); }          
        })        
      })
      // // todoEdit({getters,commit},{id,address}){
      // //   if(getters.uid){
      // //     firebase.firestore()
      // //     .collection(`users/${getters.uid}/address`)
      // //     .doc(id)
      // //     .updata(address)
      // //     .then(()=>{
      // //       commit("todoEdit,{id,address")
      //     })
      //   }
      // }
    },
    addTodo({ commit, getters }, todo){
      let todos = getters.getTodos
      todos.push[todo]

      if(getters.uid){
        firebase
          .firestore()
          .collection(`users`) 
          .doc(getters.uid)
          .set({ todos })
          .then( () => {
            commit("setTodo", todos );
          });
      }
    },
    deleteTodo({ commit, getters }, todo){
      let todos = getters.getTodos.filter( t => !(t === todo) )        
      console.log(todos);

      if(getters.uid){
        firebase
          .firestore()
          .collection(`users`) 
          .doc(getters.uid)
          .set({ todos })
          .then( () => {
            commit("setTodo", todos );
          });
      }
    },
  },
  getters:{
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',    
    uid: state => state.login_user ? state.login_user.uid : null,  
    getTodos: state => state.login_user ? state.todos : []              
  },
})