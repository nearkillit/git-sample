import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'



Vue.use(Vuex)

export default new Vuex.Store({
  //保存するもの。multationで受け取った値をstateを更新する
  state: {
    login_user:null,//ユーザー情報を保存するため
    drawer:false,//drawerを管理する宣言をしている
    addresses:[
      //  {name:'',tel:'',email:'',address:''}
     //連絡先を保存する配列
     {
      name:"阪本　由莉",
       tel:"090-27994437",
       email:"samole@com",
       address:"東京都渋谷区道元坂２−６−５７",
       action:''
     },
     {name:"田中圭",
     tel:"090-4209-1095",
     email:"samola@com",
     address:"東京都港区坂田２−３−１５",
     action:''}
    ]
    },
    //actionsの値をmultationdに渡す。
  mutations: {
    toggleSideMenu(state){     //stateの値を引数に持たせている
      state.drawer=!state.drawer
      
    },
    addAddress(state,{id,address}){
      //stateはmutationsのデフォルト、第二引数＝
      address.id=id;
      //受け取ったaddressにidを代入。
      state.addresses.push(address)
      //連絡先をstateのaddressesに追加する
      
    },
    setLoginUser(state,user){//ログインユーザー情報をstateのlogin_userにセット
      state.login_user=user
    },
    deleteLoginUser(state){//ログインユーザー情報をからにする
      state.login_user=null
    },
    deleteAddress(state,id){//stateはデフォルト。引数id=削除ボタンが押された時の要素
      const index=state.addresses.findIndex(address=>address.id===id)
      //index=何番目のデータか確認するときに使う。
      //findIndex=一致した配列のインデックス番号を取得する（判定処理）
      state.addresses.splice(index,1)//(特定番号、１つ削除)
    },
    updateAddress(state,{id,address}){//stateデフォルト、
      const index=state.addresses.findIndex((address)=>
      address.id===id);
      state.addresses[index]=address;
    }
  },
  //値の更新を受け取る。外部との通信を行う。
  actions: {//actionsにfirestoreからのデータを取得する
    fetchAddresses({getters,commit}){//fetchAddress関数。
      firebase.firestore().collection(`users/${getters.uid}/addresses`).get().then(snapshot=>
        //firebaseのfirestoreのcollection以降＝アクセス先のパス。を取得する。
        //get()で非同期にデータ取得実行。snapshotでgetの値を受け取ることができる。
        //.thenで非同期通信の処理を止める。引数snapshot
        {
          snapshot.forEach(doc=>commit('addAddress',{id:doc.id,address:doc.data()}))
        })
        //commitでmutationsを呼び出している。//forEachで一つ一つ確認している。
        //呼び出し方＝＞(mutations名、送りたいデータ)id=取得したID、address:取得したデータ。
    },
    toggleSideMenu({commit}){//actionsがmutationsに処理実行を指示するから共通の関数名にしておくと良い
      commit('toggleSideMenu');//mutationsを実行している。commitさせている。取り組ませている
    },
    addAddress({getters,commit},address){
      ///getters=userIDを取得する。commit=actionsのデフォルト
      //userIDを取得してこれたら以降の処理をする
      if(getters.uid){//getters.uidを取得したら
        firebase.firestore().collection('users/${getters.uid}/addresses')
         //firebase-->firestoreに通信するための処理
         //ユーザー→ユーザーID→アドレスを取得する
        .add(address) .then((doc)=>{
            //追加処理。引数に追加したい要素。登録する処理を待つthen
          commit('addAddress',{id:doc.id,address});
          //追加処理終えたデータをもらってくる。
        })
      }
    },
    setLoginUser({commit},user){//mutationsのログイン情報登録を呼び出し
      commit('setLoginUser',user)
    },
    login(){
      //google_auth?provider=プロジェクトの情報が入っている
      //Googleプロバイダイブジェクトのインスタンス作成
      const google_auth_provider=new firebase.auth.GoogleAuthProvider()
      //ログインページにリダイレクトしてログインするためのコード
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout(){//ログアウト処理
      firebase.auth().signOut()
    },
    deleteLoginUser({commit}){//mutationのログインユーザー情報削除の呼び出し
      commit('deleteLoginUser')
    },
   deleteAddress({getters,commit},id){
     if(getters.uid){
       firebase.firestore().collection(`users/${getters.uid}/addresses`)
       .doc(id).delete().then(()=>{
         commit('deleteAddress',id)
       })
     }
   },
   updateAddress({getters,commit},{id,address}){
     //
     if(getters.uid){
       firebase.firestore().collection(`users/${getters.uid}/addresses`)
       .doc(id).update(address).then(()=>{
         //どのデータを更新するのかdocumentのidのsddressを更新する
         commit("updateAddress",{id,address});
         //mutationsで呼び出している
       });
     }
   }
  },

  getters: {
    //ログインユーザーの名前の処理
    userName(state){
      if(state.login_user){ //stateのなかにユーザー情報を持っていたら
        return state.login_user.displayName;//ディスプレイに名前を表示する
      }else{   //もしユーザー名が無かったら空にする
        return '';
      }
    },
    photoURL(state){ 
   if(state.login_user){  //stateのなかにユーザー情報を持っていたら
     return state.login_user.photoURL;
   }else{ //もし無かったら空にする
     return ;
   }
    },
    //
    uid:(state)=>(state.login_user?state.login_user.uid:null),
    getAddressById:(state)=>(id)=>
    state.addresses.find((address)=>address.id===id),
  }
})
console.log(document);
