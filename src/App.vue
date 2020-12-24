<template>
  <div id="app">
    <Footer/>
    <router-view/>
  </div>
  
</template>
<script>
import Footer from "@/components/Navigation_L/Footer_L"
export default {
  components:{
    Footer,
  }
}
</script>

<style lang="scss">
</style>
