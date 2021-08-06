<template>
<div id="app">
  <table>
        <tr>
            <th>制作日時</th>
            <th>タイトル</th>
            <th>内容</th>
            <th>期日</th>
            <th>進捗表</th>
            <th>メモ</th>
            <th>削除／編集</th>
        </tr>
  </table>
        <tr v-for="todo in todos" :key="todo.date" >
            <td>{{todo.data}}</td>
            <td>{{todo.title}}</td>
            <td>{{todo.content}}</td>
            <td>{{todo.deadline}}</td>
            <td>{{todo.progress}}</td>
            <td>{{todo.memo}}</td>
        </tr>
            

</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      todos:[
          {
              date:new Date(),
              title:"test",
              content:"この内容はテストです",
              deadline:new Date(),
              progress:80,
              memo:"消すのを忘れないように"
          }
      ]
    }
  },
  methods:{
     ...mapActions(["todoEdit"]),
    editTodo(){
      if(this.$route.params.address_id){
      this.todoEDit({
        id:this.$route.params.address_id,
        address:this.address
      })}
    //   else{
    //     this.todoEdit(yhis.address)
    //   }
    //   this.$router.push({name:"addresses"})
    //   this.address={}
      
    }

  }
}


</script>
