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
        <tr v-for="todo in todos" :key="todo.date">
            <td>{{dateChange(todo.date)}}</td>
            <td>{{todo.title}}</td>
            <td>{{todo.content}}</td>
            <td>{{dateChange(todo.deadline)}}</td>
            <td>{{todo.progress}}</td>
            <td>{{todo.memo}}</td>
            <td>
                <button @click="dltTodo(todo)">削除</button>
                <button>編集</button>
            </td>
        </tr>
    </table>
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
    ...mapActions(['deleteTodo']),
    
    dltTodo(todo){
        var res = confirm("削除しても大丈夫ですか？");
        if( res == true ) {            
            this.deleteTodo(todo)
        }
        else {            
            alert("キャンセルしました。");
        }
    },
  },
  computed:{
      dateChange(){
          return function(d){
              return d.getFullYear() + '年' + ( d.getMonth() + 1 ) + '月' + d.getDate() + '日' + d.getHours() + ':' + d.getMinutes()
          }
      }
  }
}
</script>
