<template>
    <div>
        <p>
            <label>メモを入力</label>
            <textarea name="memo" id="" cols="30" rows="10" v-model="memo"></textarea>
        </p>
        <input type="submit" name='mamoAdd' value="追加" @click="memoAdd">
        <ol>
            <li>
                {{memo.momo}}
            </li>
        </ol>
    </div>

</template>

<script>
// import { mapActions } from 'vuex'

//     export default ({
//     data() {
//         return{
//             memo:{
//                 memo:''
//             }
//         }
//     },
//     methods(){
//         // ...mapActions(['']),
        

//         }
//     }
// })
</script>
