
<template>
<v-container text-xs-center>
  <v-flex xs12 class="text-center">
    <h1>連絡先編集</h1>
  </v-flex>
  
  <v-flex xs5 mt-5>
    <v-card>
      <v-card-text>
      <v-form>
        <v-text-field v-model="address.name" label="名前"></v-text-field>
        <v-text-field v-model="address.tel" label="電話番号"></v-text-field>
        <v-text-field v-model="address.email" label="メールアドレス"></v-text-field>
        <v-text-field v-model="address.address" label="住所"></v-text-field>
        <!-- <v-text-field v-model="address.action" label="変更"></v-text-field> -->
        <div class="text-center">
          <v-btn @click="$router.push({name:'Addresses'})">キャンセル</v-btn>
          <!-- $router.push=ルーターオブジェクト。キャンセルボタンを押すとAddressに画面遷移。 -->
          <v-btn color="info" class="ml-2" @click="submit()">保存</v-btn>
        </div>
      </v-form>
      </v-card-text>
    </v-card>
  </v-flex>
</v-container>

</template>

<script>
//vuexからmapActionsを読み込んでいる
import {mapActions} from 'vuex'

export default {
  created(){
    const address=this.$store.getters.getAddressById(
      this.$router.params.address_id
    );
    if(address){
      this.address=address;
    }},
  data(){
    return{
      address:{ }
    };
    
  },
  methods:{
    submit(){//metodsないで呼び出しているaddAddressメソッドにデータを持たせている
    if(this.$route.params.address_id){
      this.updateAddress({
        id:this.$route.params.address_id,
        address:this.address
      });
    }else{
      this.addAddress(this.address);
    }
      this.$router.push({name:"Addresses"});//動的なルーティング。メソッド実行時にAddressに画面移動するリンクを貼っている
      this.address={ };
    
    },
    
     //importしたmapActions機能を使ってstoreのactionsにあるメソッドaddAddressを呼び出している
     //呼び出すときは「引数」＋「配列形」
    ...mapActions(["addAddress","updateAddress"]),
  }
    
   
}

  </script>