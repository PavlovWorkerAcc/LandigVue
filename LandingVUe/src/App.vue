<script setup>


</script>

<template>
  <preloader/>
  <router-view></router-view>
</template>


<script>

  import preloader from "./components/preloader.vue";

  export default{
    name:'App',
    components:preloader
  }
</script>
