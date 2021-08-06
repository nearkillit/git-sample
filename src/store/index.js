import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

const initialState = {
  login_user: null,  
  todos:[],
  userExist:false,  
  boards:[]
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
    addTd(state, { id, todo }) {
      todo.id = id;
      state.todos.push(todo);
    },
    fetchTd(state, { id, todo }) {
      state.todos = []
      todo.id = id;
      state.todos.push(todo);
    },
    updateTd(state, { id, todo }) {
      const index = state.todos.findIndex(td => td.id === id);
      state.todos[index] = todo;
    },
    deleteTd(state, { id }) {
      const index = state.todos.findIndex(td => td.id === id)
      state.todos.splice(index, 1);
    } ,
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
    // 掲示板の時に使います（※おそらく）
    // fetchTodos({ commit, getters }){      
    //   firebase.firestore().collection(`users`).get().then( querySnapshot => {                
    //     querySnapshot.forEach( doc => {
    //       if( doc.id == getters.uid ){ commit('setTodo', doc.data() ); }          
    //     })        
    //   })
    // },
    // addTodo({ commit, getters }, todo){
    //   let todos = getters.getTodos
    //   todos.push[todo]

    //   if(getters.uid){
    //     firebase
    //       .firestore()
    //       .collection(`users`) 
    //       .doc(getters.uid)
    //       .set({ todos })
    //       .then( () => {
    //         commit("setTodo", todos );
    //       });
    //   }
    // },  
    addTd({ getters, commit }, todo) {      
      if (getters.uid) {
        console.log('addtd');
        firebase.firestore().collection(`users/${getters.uid}/todos`).add(todo).then((doc) => {
          commit('addTd', { id: doc.id, todo })
        });
      }
    },
    updateTd({ getters, commit }, { id, todo }) {
      console.log(todo);
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/todos`).doc(id).update(todo).then(() => {
          commit('updateTd', { id, todo })          
        });
      }
    },
    deleteTd({ getters, commit }, { id }) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/todos`).doc(id).delete().then(() => {
          commit('deleteTd', { id })
        })
      }
    },
    fetchTd({ getters, commit }) {      
      firebase.firestore().collection(`users/${getters.uid}/todos`).get().then(snapshot => {        
        snapshot.forEach(doc => {
          commit('fetchTd', { id: doc.id, todo: doc.data() })          
        })
      })
    },  
  },
  getters:{
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',    
    uid: state => state.login_user ? state.login_user.uid : null,  
    getTodos: state => state.login_user ? state.todos : [] ,
    getTodo: state => id => state.todos.find(td => td.id === id),           
  },
})