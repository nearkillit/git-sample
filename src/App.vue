<template>
  <div id="app">
    <h1>Todoリスト</h1>
    <div>
      <button @click="gotoLink('Home')">Home</button>
    </div> 
    <router-view></router-view>
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
