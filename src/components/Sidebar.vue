<template>
  <div class=" flex flex-row justify-between z-50 ">
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <button class="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
            @click="close"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true" class="h-5 inline-block w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg></button>
          <li class="mb-2 font-semibold text-2xl">
            <p>Strand</p>
          </li>

          <RouterLink to="/">
            <li>
              <div>
                <ChartBarIcon class="size-4" /> Dashboard
              </div>
            </li>
          </RouterLink>

          <RouterLink to="/users">
            <li>
              <div>
                <UserIcon class="size-4" /> Users
              </div>
            </li>
          </RouterLink>
          <RouterLink to="/todos">
            <li>
              <div>
                <PencilIcon class="size-4" />Todo
              </div>
            </li>
          </RouterLink>
          <RouterLink to="/settings">
            <li>
              <div>
                <CogIcon class="size-4" />Utilities
              </div>
            </li>
          </RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon, PencilIcon, CogIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
const close = () => {
  const drawer = document.getElementById('my-drawer-2') as HTMLInputElement;
  if (drawer) {
    drawer.checked = false;
  }
}
</script>

<style scoped>
/* Scoped styles for the sidebar */
</style>
