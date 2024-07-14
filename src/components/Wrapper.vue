<template>
  <div class="flex">
    <Sidebar />

    <div class="w-full">
      <Navbar />
      <div class="flex-1 p-6 overflow-y-auto justify-center">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script  setup lang="ts">
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
</script>


<style scoped>
/* Scoped styles for the sidebar */
</style>
