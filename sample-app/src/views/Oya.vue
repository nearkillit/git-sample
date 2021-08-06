<template>
  <div class="oya">
    <Ko/>     //子コンポーネントの呼び出し
  </div>
</template>

<script>
// @ is an alias to /src
import Ko from "@/components/Ko.vue";

export default {
  name: 'Oya',
  components: {
    Ko,
  }
}
</script>
