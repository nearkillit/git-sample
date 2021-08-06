<template>
<v-container text-xs-center justify-center>
  <v-layout row wrap>
    <v-flex xs 12>
      <h1>連絡先一覧</h1>
      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{name:'Address_edit'}">
          <!-- アドレスフォームが呼び出される -->
          <v-btn color="info" @click="submit()">連絡先変更・追加</v-btn>
          </router-link>
         

        
      </v-flex>
      
    </v-flex>

    <v-flex xs 12 mt-5 justify-center>
      <v-data-table :headers="headers" :items="addresses"> //itemsを親から子へ
         <template v-slot:[`item.action`]="{item}">
           <router-link :to="{name:'Address_edit',params:{address_id:item.id}}">
          <!-- <td class="text-xs-left">{{props.item.name}}</td>
          <td class="text-xs-left">{{props.item.tel}}</td>
          <td class="text-xs-left">{{props.item.email}}</td>
          <td class="text-xs-left">{{props.item.addresses}}</td> -->
          <v-icon small class="mr-2">mdi-pencil</v-icon>
           <v-icon small class="mr-2" @click="deleteConfirm(item.id)">mdi-delete</v-icon>
           <!-- 引数＝items配列の中にある一つ一つ受け取ってくるitemのなかのid -->
           </router-link>
        </template> 
      </v-data-table>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import {mapActions} from 'vuex'

 export default{
   data(){
     return{
       headers:[
         {text:"名前",value:"name"},
         {text:"電話番号",value:"tel"},
         {text:"メールアドレス",value:"email"},
         {text:"住所",value:"address"},
         {text:"変更",value:"action"}
       ],
       addresses:[
         {
      name:"阪本　由莉",
       tel:"090-27994437",
       email:"samole@com",
       address:"東京都渋谷区道元坂２−６−５７",
       action:''
     },
     {name:"田中  圭",
     tel:"090-4209-1095",
     email:"samola@com",
     address:"東京都港区坂田２−３−１５",
     action:''}
       ]
     
     }
   },//ライフサイクルフックのvueインスタンス作成ごのタイミングでstore内にあるstateのaddressをdataのaddresses配列に代入
  
     created(){
       this.addresses=this.$store.state.addresses;
     },
     methods:{
       deleteConfirm(id){
         if(confirm("削除してもよろしいでしょうか")){
           //confirm=ダイアログを表示。はい→true   いいえ→false
           this.deleteAddress({id});
           //actionsにdeleteAddressメソッド(削除する要素)を実行
         }
       }
     },
     ...mapActions(["deleteAddress","deleteConfirm"])
     //mapActiondにて上記ふとつを使用するので宣言する
 
   }
</script>
<style scoped lang="scss"></style>