<template>
<v-container fluid fill-height>
  <v-btn color="green" dark @click.stop="drawer=!drawer">ボタン</v-btn>
  <!-- @click.stop=子要素のイベントが親要素のイベントを呼び出さないようにするたね -->
  <!-- 真偽値で表示、非表示を切り替えることが出来る。v-modelで値の切り替えを行なっている -->
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list>
      <v-list-item >
        <v-list-item-avatar>
          <img  v-if="photoURL" :src="photoURL"/>
          <!-- ユーザーの情報がなかったときに、変な文字が出てしまうのを防ぐ為
          v-ifを使っている。photoURL=gettersにある値 -->
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title >{{userName}}</v-list-item-title>
          <!-- ログインユーザーの名前。gettersにある値。 -->
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="(item,index) in items" :key="index" :to="item.link">
        <!-- items配列からitem要素を取り出す。indexは配列の何個目なのか。リンクをv-bind -->
        <!--  -->
       <v-list-item-icon>
         <v-icon> {{item.icon}}</v-icon>
         </v-list-item-icon>
         <v-list-item-content>
           <v-list-item-title>{{item.title}}</v-list-item-title>
         </v-list-item-content>
      </v-list-item>
      
        
      
    </v-list>
  </v-navigation-drawer> 
</v-container> 

</template>

<script>
import { mapGetters } from 'vuex';
//gettersを使っているのでimportする
export default{//外部でデータを使えるようにする準備をしている
  data(){
    return{
      drawer:false,
      items:[
        {title:"ホーム",icon:"mdi-home",link:{name:"Home"},},
        {title:"連絡先一覧",icon:"mdi-menu",link:{name:"Addresses"}
        },
        
      ]
    };
  },
  computed:{
          ...mapGetters(["userName","photoURL"])
          // mapGetters
          //computedでgettersの値が変わったら処理をするように監視している
        }
};

</script>


