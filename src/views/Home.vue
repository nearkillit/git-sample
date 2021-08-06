<template>
  <div id="app"> 
    <p v-if="loading">loading...</p>   
    <div>
      <button @click="login">login</button>
    </div>
    <div>
      <button @click="gotoLink('todoViews')">Todo一覧</button>
    </div>
    <div>
      <button @click="gotoLink('todoAdd')">Todo追加</button>
    </div>    
    <div>
      <button @click="gotoLink('Board')">掲示板</button>
    </div> 
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      loading:false
    }
  },
  methods:{
    ...mapActions(["setLoginUser", "logout", "deleteLoginUser","fetchTodos","login"]),
    
    gotoLink(name){      
      this.$router.push({ name }, () => {});
    }
  },
  created(){       
    this.loading = true
    firebase.auth().onAuthStateChanged( user => {
        if(user){                  
          this.setLoginUser(user);
          this.fetchTodos();                    
        }else{
          this.deleteLoginUser();
          this.$router.push({ name:"home" }, () => {});
        }
        this.loading = false      
    })       
  }
}
</script>

<style scoped>

</style>
