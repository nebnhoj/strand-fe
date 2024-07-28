<template>
  <div class="flex">
    <Sidebar />
    <div class="w-full">
      <Navbar />
      <div class="flex-1 p-12 overflow-y-auto justify-center">
        <div class="mb-10">
           <h1 class="text-4xl font-bold">{{ route.name }}</h1>
        </div>
    
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script  setup lang="ts">
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import { useRoute } from 'vue-router';
const route = useRoute(); 
</script>


<style scoped>
/* Scoped styles for the sidebar */
</style>
