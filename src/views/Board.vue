<template>
  <div id="app">
    <h1>掲示板</h1>
    <div class="board">
        <div class="boardChild" v-for="board in boards" :key="board.name">
            <p>名前：{{ board.name }} 日付：{{ dateChange(board.date) }}</p>            
            <p>{{ board.context }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
        boards:[
            { name:'A',
              date:new Date(),
              context:'あああ'},
            { name:'B',
              date:new Date(),
              context:'あああ'},
            { name:'C',
              date:new Date(),
              context:'あああ'},
            { name:'D',
              date:new Date(),
              context:'あああ'}  
        ]
    }
  },
  methods:{
    ...mapActions(['deleteTodo']),
    
  
  },
  computed:{
      dateChange(){
          return function(d){
              return d.getFullYear() + '年' + ( d.getMonth() + 1 ) + '月' + d.getDate() + '日' + d.getHours() + ':' + d.getMinutes()
          }
      },
      timestampToTime(timestamp){            
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
                console.log(timestamp.seconds);
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
</script>

<style scoped>
.board{
    display: flex;    
    flex-wrap: wrap;
    color: dimgray;
}
.boardChild{
    width: 100vw;
    font-size: 12px;
    padding: 0 1% 1% 0;
    transition: 0.3s;
}

</style>