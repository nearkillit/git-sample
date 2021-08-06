<template>
<v-app>
  <v-app-bar app color="primary" dark>
  <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
  <v-toolbar-title>マイアドレス帳</v-toolbar-title>

  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-toolbar-items v-if="$store.state.login_user">
      <!-- //ユーザー情報を保存するためのstate -->
    <v-btn text @click="logout">ログアウト</v-btn>
    </v-toolbar-items>
  </v-toolbar-items>
</v-app-bar>

<SideNav/>
<!-- SideNavコンポーネントを指定 -->
<v-content>
  <v-container fluid fill-height align-start>
    <router-view/>
    <!-- //画面に表示するため -->
  </v-container>
  </v-content>

</v-app>
</template>
<script>

import SideNav from "./components/SideNav.vue";
// 単一ファイルコンポーネントのインポート
import {mapActions} from "vuex";
import firebase from 'firebase'

export default{
  name: "App",
  components:{
    // 使用するためにコンポーネントに追加
    SideNav
  },
  created(){//vueインスタンス作成後に実行
    firebase.auth().onAuthStateChanged(user=>{
      // ログイン処理（サインインした後、サインアウトした後）に呼ばれるメソッド
      //user＝ログインされたユーザーの情報が入っている
      if(user){
        this.setLoginUser(user);//(actionsの処理)ログインが成功したかそうでないかのif文
        if(this.$router.currentRoute.name ==="Home"){
          //ログイン後に今いる場所がHomeだとしたらAddressに画面遷移する
          //currentRoute.nameは現在いるルートの名前を取得している
          this.$router.push({name:"Addresses"},()=>{});
          //アロー関数。第３引数まで設定可能。詳しくはテキストP14参照。
          this.fetchAddresses();
      console.log(this.fetchAddresses)
        }
      }else{
        this.deleteLoginUser();//actionsのログアウトの処理の関数
        this.$router.push({name:"Home"},()=>{});
        //ログアウトしたらHome画面に戻る
      }
      
    })
  },
  data:()=>({
//
  }),
  methods:{
    ...mapActions(["toggleSideMenu","setLoginUser","logout","deleteLoginUser","fetchAddresses"])
  }//actionsで設定した数々の値等。配列形式で文字列で呼び出す。
}

</script>