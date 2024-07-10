<template>
  <div  class="flex">
       
       <Sidebar/> 

    <div class=" w-full  ">
      <Navbar/>
      <Wrapper/>
  </div>
  </div>


   
 
</template>

<script  setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import Wrapper from './components/Wrapper.vue';
 
</script>

<style>
/* Global styles can go here */
</style>
