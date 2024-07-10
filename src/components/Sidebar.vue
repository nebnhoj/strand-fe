<template>
  <div class=" flex flex-row justify-between ">
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->

          <li class="mb-2 font-semibold text-2xl"><p>Strand</p> </li>

          <RouterLink to="/"><li> <div><ChartBarIcon class="size-4" /> Dashboard</div></li></RouterLink>

          <RouterLink to="/users"><li> <div><UserIcon class="size-4" /> Users</div></li></RouterLink>
          <RouterLink to="/todo"><li><div><PencilIcon class="size-4" />Todo</div></li></RouterLink>
          <RouterLink to="/settings"><li><div><CogIcon class="size-4" />Utilities</div></li></RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<script  setup lang="ts">
import { UserIcon, PencilIcon,CogIcon,ChartBarIcon } from '@heroicons/vue/24/outline'
 
</script>

<style scoped>
/* Scoped styles for the sidebar */
</style>
