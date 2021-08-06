<template>
  <div id="app">     
    <div>
      <button v-if="!userName" @click="login">login</button>
      <button v-else-if="userName" @click="logout">logout</button>
      <span v-if="loading">loading...</span>  
      <span v-else-if="userName">ようこそ！ {{userName}} さん</span> 
    </div>
    <div v-if="!loading">    
      <button @click="gotoLink('todoViews')">Todo一覧</button>
      <button @click="gotoLink('todoAdd')">Todo追加</button>
      <button @click="gotoLink('Board')">掲示板</button>
    </div> 
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      loading:false
    }
  },
  computed:{
    ...mapGetters(['getTodos','userName']),
  },
  methods:{
    ...mapActions(["setLoginUser", "logout", "deleteLoginUser","fetchTd","login"]),
    
    gotoLink(name){      
      this.$router.push({ name }, () => {});
    }
  },
  created(){       
    this.loading = true
    firebase.auth().onAuthStateChanged( user => {
        if(user){                  
          this.setLoginUser(user);
          this.fetchTd();                              
        }else{
          this.deleteLoginUser();
          this.$router.push({ name:"Home" }, () => {});
        }
        this.loading = false      
    })       
  }
}
</script>

<style scoped>

</style>
