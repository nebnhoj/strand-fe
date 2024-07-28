<template>
  <div class="w-full mx-auto px-4 h-120 overflow-y-scroll">
    <div class="flex justify-between items-center mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="px-4 py-2 border rounded"
        @input="handleSearchInput"
      />
      <button class="btn btn-primary" ><PlusIcon class="size-4"/> Create Todo</button>
    </div>
    <table class="min-w-full border border-gray-200">
      <thead>
        <tr>

          <th class="py-2 px-4 border-b">Name</th>
          <th class="py-2 px-4 border-b">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          
          <td class="py-2 px-4 border-b">{{ item.name }}</td>
          <td class="py-2 px-4 border-b">{{ item.details }}</td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center mt-4">
      <div class="join">
        <button
          v-for="page in paginationPages"
          :key="page"
          :class="['join-item btn ', { 'btn-primary': page === currentPage, 'btn-disabled': page === '...' }]"
          @click="goToPage(page)"
          :disabled="page === '...'"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import axios from 'axios';
import { PlusIcon} from '@heroicons/vue/24/outline'

interface Todo {
  id: string;
  name: string;
  details: string;
}

const items = ref<Todo[]>([]);
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(0);

const totalPages = computed(() => {
  return Math.ceil(totalItems.value / itemsPerPage.value);
});

const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/todos', {
      params: {
        q: searchQuery.value,
        page: currentPage.value,
        limit: itemsPerPage.value,
      },
    });
    if (response.data.status === 200) {
      items.value = response.data.data;
      totalItems.value = response.data.total || items.value.length;
      console.log('Fetched Data:', items.value);
      console.log('Total Items:', totalItems.value);
    } else {
      console.error('Error fetching data:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const handleSearchInput = () => {
  currentPage.value = 1;
  fetchData();
};

const goToPage = (page: number | string) => {
  if (typeof page === 'number') {
    currentPage.value = page;
    fetchData();
    console.log('Go to Page:', currentPage.value);
  }
};

const paginationPages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    if (current > 4) pages.push('...');
    for (let i = Math.max(2, current - 2); i <= Math.min(total - 1, current + 2); i++) {
      pages.push(i);
    }
    if (current < total - 3) pages.push('...');
    pages.push(total);
  }
  return pages;
});

watch(searchQuery, () => {
  currentPage.value = 1;
  fetchData();
});

fetchData();
</script>
