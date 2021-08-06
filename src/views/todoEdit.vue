<template>
<div id="app">
  <div> 
    <h1>Todo編集画面</h1>
        <p>
            <label>タイトル</label>
            {{todo.title}}
        </p>
        <p>
            <label>内容</label>
            <textarea name="todo" id="" cols="30" rows="10" v-model="todo.content"></textarea>
        </p>
        
        <p>
            <label>期日</label>
            <input size='10' type="date" v-model="todo.deadline">
        </p>
        <p>
            <label>進捗率</label>
            <select name="" id="" v-model="todo.progress">
                <option value="10">10 %</option>
                <option value="20">20 %</option>
                <option value="30">30 %</option>
                <option value="40">40 %</option>
                <option value="50">50 %</option>
                <option value="60">60 %</option>
                <option value="70">70 %</option>
                <option value="80">80 %</option>
                <option value="90">90 %</option>
                <option value="100">100 %</option>
            </select>
        </p>
        <p>
            <label>メモ</label>
            <input  type="text" v-model="todo.memo" >
        </p>
        <input type="submit" name='submit' value="変更" @click="submit">
        <div>
            <button @click="gotoLink('todoViews')">Todo一覧</button>
        </div>
    </div>
            

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      todo:{}
    }
  },
  computed:{
    ...mapGetters(['getTodo'])
  },
  methods:{
    ...mapActions(['updateTd']),
    submit(){
   this.updateTd({id:this.todo.id,todo:this.todo})
   this.$router.push({name:"todoViews"})
    },
    gotoLink(name){
                this.$router.push({name},()=>{});
            }
  },
  created(){
    if(this.$route.params.id){
      this.todo = this.getTodo(this.$route.params.id)
    }else{
      this.$router.push({name:"Home"})
    }                 
  }
}


</script>
