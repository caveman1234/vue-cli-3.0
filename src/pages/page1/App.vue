<template>
  <div id="app">
    page1-app1
    <Comp1></Comp1>
  </div>
</template>
<script>
import Comp1 from "@/global/comp/Comp1.vue";
export default {
  name: "App",
  components: { Comp1 },
  data() {
    return {

    }
  },
  mounted() {
  }
}
</script>

<style lang="less">
</style>
