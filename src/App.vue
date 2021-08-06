<template>
  <div id="app">
    <h1>Todoリスト</h1>
    <div>
      <button @click="gotoLink('todoViews')">Todo一覧へ</button>
    </div> 
    <router-view></router-view>
    <router-link to="/todoEdit">追加</router-link>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    gotoLink(name){      
      this.$router.push({ name }, () => {});
    }
  }
}
</script>
