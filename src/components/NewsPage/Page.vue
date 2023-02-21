<script setup>
import Header from "@/components/homePageComp/Header.vue";
import Footer from "@/components/homePageComp/Footer.vue";
import Footer_Second from "@/components/homePageComp/Footer_Second.vue";
</script>

<template>
 <Header/>

  <Footer/>
  <Footer_Second/>
</template>

<script>



export default {
  name: "Page-news-item",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>

</style>