<template>
    <!-- <h1>todoリスト追加画面</h1> -->
    <div> 
        <p>
            <label>タイトル</label>
            <input type="text" v-model="title">
        </p>
        <p>
            <label>内容</label>
            <textarea name="todo" id="" cols="30" rows="10" v-model="content"></textarea>
        </p>
        <p>
            <label>期日</label>
            <input type="date" v-model="date">
        </p>
        <p>
            <label>進捗率</label>
            <!-- 進捗率入力作成予定 -->
        </p>
        <input type="submit" name='submit' value="追加" @click="submit">
        <div>
            <button @click="gotoLink('todoViews')">Todo一覧</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default{
        data(){
            return{
                todos:[    
                    title:'',
                    content:'',
                    date:new Date(),   
                ] 
              }   
        },
        methods:{
            submit(){
                this.$store.dispatch('addTodo',todos);
            },

            gotoLink(name){
                this.$routet.push({name},()=>{});
            }
        }

    }

</script>