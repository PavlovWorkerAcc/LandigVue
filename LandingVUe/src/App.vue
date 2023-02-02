<script setup>

import preloader from "./components/preloader.vue";
</script>

<template>
  <preloader/>
  <router-view></router-view>
</template>


<script>


  export default{
    name:'App',

  }
</script>
