<script setup lang="ts">
interface User {
  name: string | null;
  avatar_url: string;
}

const user = useSanctumUser<User>();
const isLoading = ref(false);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = true;
  }, 500);
})

</script>
<template>
  <template v-if="!isLoading">
    <div class="max-w-full mx-32 bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div class="p-4 text-center">
        <div class="relative w-24 h-24 mx-auto mb-4">
          <div class="rounded-full w-full h-full border-4 border-gray-300 bg-gray-200"></div>
        </div>
        <div class="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mx-auto mt-2"></div>
        <div class="h-3 bg-gray-200 rounded w-3/4 mx-auto mt-1"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mx-auto mt-2"></div>
      </div>
      <div class="border-t px-4 py-2">
        <div class="flex justify-between items-center">
          <div class="text-center">
            <div class="h-3 bg-gray-200 rounded w-3/4 mx-auto mt-2"></div>
            <div class="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </div>
          <div class="text-center">
            <div class="h-3 bg-gray-200 rounded w-3/4 mx-auto mt-2"></div>
            <div class="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </div>
          <div class="text-center">
            <div class="h-3 bg-gray-200 rounded w-3/4 mx-auto mt-2"></div>
            <div class="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="isLoading">
    <div class="max-w-full mx-32 bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-4 text-center">
        <div class="relative w-24 h-24 mx-auto mb-4">
          <img :src="user?.avatar_url ?? '/favicon.ico'" alt="Profile Picture"
               class="rounded-full w-full h-full border-4 border-gray-300">
        </div>
        <h2 class="text-lg font-bold text-gray-800">{{ user?.name }}</h2>
        <p class="text-sm text-gray-500">منشئ محتوى رقمي</p>
        <p class="text-sm text-gray-500 mt-1">Information Technology Engineer specializing in Programming.</p>
        <a href="https://king-mubasher.blogspot.com" class="text-blue-500 underline text-sm mt-2 block">king-mubasher.blogspot.com</a>
      </div>
      <div class="border-t px-4 py-2">
        <div class="flex justify-between items-center">
          <div class="text-center">
            <p class="text-sm text-gray-600">منشورات</p>
            <p class="text-lg font-bold text-gray-800">29</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-600">متابع</p>
            <p class="text-lg font-bold text-gray-800">864</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-600">يتابع</p>
            <p class="text-lg font-bold text-gray-800">699</p>
          </div>
        </div>
      </div>
    </div>
  </template>


</template>


<style scoped>

</style>