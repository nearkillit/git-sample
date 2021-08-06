<template>
<div class="home">
  
  <!-- <v-container> -->
<v-container>
  <v-layout>
  <v-flex xs 12 mt-5>
    <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
  </v-flex>
  </v-layout>
    <!-- </v-container> -->
    </v-container>
  
  </div>
</template>

<script>
import {mapActions}from "vuex";//mapを使いたい時はインポートする
export default{//外部に読み込ませるときに使う。
  methods:{
    ...mapActions(["login","fetchAddresses"])//actionsで設定しているloginを呼び出している
  }
}
 

  // export default {
  //   name: 'Home',

  //   components: {
  //     Addresses,
  //   },
  // }
</script>
