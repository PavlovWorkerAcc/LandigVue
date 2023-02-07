<script setup>



import Preloader from "./components/preloader.vue";
</script>

<template>
  <Preloader/>
  <router-view/>
</template>


<script>
  export default{
    name:'App',
  }
</script>
