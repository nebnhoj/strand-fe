
<script setup lang="ts">
import {routes} from './../config/routes'
const close = () => {
  const drawer = document.getElementById('my-drawer-2') as HTMLInputElement;
  if (drawer) {
    drawer.checked = false;
  }
}
const menuItems =routes[0].children;
</script>

<style scoped>
/* Scoped styles for the sidebar */
</style>
<template>
  <div class=" flex flex-row justify-between z-50 ">
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <button class="btn btn-ghost hover:bg-primary  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
            @click="close"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true" class="h-5 inline-block w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg></button>
          <li class="mb-2 font-semibold text-2xl">
            <p>Strand</p>
          </li>

          <div v-for="menu in menuItems">
            <RouterLink :to="`/${menu.path}`">
            <li class="hover:bg-primary hover:text-white hover:rounded-lg">
              <div>
                <component :is="menu.icon"  class="size-4" /> {{ menu.name }}
              </div>
            </li>
          </RouterLink>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

