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