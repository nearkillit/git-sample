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
            <th>ID</th>
            <th>削除／編集</th>
        </tr>
        <tr v-for="todo in getTodos" :key="todo.id">
            <td>{{timestampToTime(todo.date)}}</td>
            <td>{{todo.title}}</td>
            <td>{{todo.content}}</td>
            <td>{{timestampToTime(todo.deadline)}}</td>
            <td>{{todo.progress}}</td>
            <td>{{todo.memo}}</td>
            <td>{{todo.id}}</td>
            <td>
                <button @click="dltTodo(todo)">削除</button>
                <button @click="edtTodo(todo)">編集</button>
                <button @click="deleteTd({ id:todo.id })">削除（※テスト）</button>
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
    }
  },
  methods:{
    ...mapActions(['deleteTd']),
    
    dltTodo(todo){                     
        var res = confirm("削除しても大丈夫ですか？");
        if( res == true ) {            
            this.deleteTd(todo)
        }
        else {            
            alert("キャンセルしました。");
        }
    },
    edtTodo(todo){
        this.$router.push({ name:"todoEdit", params: { id:todo.id} });
    }
  },  
  computed:{
      ...mapGetters(['getTodos']),

      timestampToTime(){     
          return function(timestamp){
              if(timestamp.seconds){
                const date = new Date(timestamp.seconds * 1000);
                const yyyy = `${date.getFullYear()}`;            
                const MM = `0${date.getMonth() + 1}`.slice(-2); // getMonth()の返り値は0が基点
                const dd = `0${date.getDate()}`.slice(-2);
                const HH = `0${date.getHours()}`.slice(-2);
                const mm = `0${date.getMinutes()}`.slice(-2);
                const ss = `0${date.getSeconds()}`.slice(-2);
                return `${yyyy}/${MM}/${dd} ${HH}:${mm}:${ss}`;
            }else{                
                const yyyy = timestamp.getFullYear()
                const MM = timestamp.getMonth() + 1
                const dd = timestamp.getDate()
                const HH = timestamp.getHours()
                const mm = timestamp.getMinutes()
                const ss = timestamp.getSeconds()
                return `${yyyy}/${MM}/${dd} ${HH}:${mm}:${ss}`;                
            }     
          }                                      
    }
  }
}
</script>
