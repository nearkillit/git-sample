<template>
  
    <div id="moji"> 
        <p>
            <label>タイトル★★</label>
            <input type="text" v-model="todo.title">
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
        <input type="submit" name='submit' value="追加" @click="submit()">
        <div>
            <button @click="gotoLink('todoViews')">Todo一覧</button>
        </div>
    </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
    export default {
        data(){
            return{
                todo: {   
                    title:'',
                    content:'',
                    date:new Date(), 
                    deadline:'',
                    memo:'',
                    progress:''
                 },
                 todoChange: {
                     title:'タイトル',
                     content:'内容',
                     deadline:'期日',
                     memo:'メモ',
                     progress:'進捗率'
                 } 
              }   
        },
        methods:{
            ...mapActions(['addTd']),
            submit(){
                let check = ''
                for( const t in this.todo ){
                    if(this.todo[t] === ''){ 
                        check += this.todoChange[t] + ', ' 
                    }
                }
                
                if(!(check === '')){                                    
                    alert(check + ' が入力されていません。');
                                
                }else{                                  
                    this.addTd(this.todo)               
                    console.log(this.todo);
                    this.gotoLink('todoViews')
                }                
            },

            gotoLink(name){
                this.$router.push({name},()=>{});
            }
        }

    }

</script>
<style>
/* @import "./css/styles.css";

#moji{
   text-align: justify;
text-justify: inter-ideograph; 
} */

</style>