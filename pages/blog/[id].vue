<script setup lang="ts">
import {useCategoryColor} from "~/composables/CategoryColor";

const route = useRouter()
const storePost = PostStore()
const sportsPosts = computed(() =>
    storePost.posts.filter((post) => post.image !== '' && post.category_name === route.currentRoute.value.params.id)
);
</script>

<template>
  <section class="mt-5 bg-white rounded ">
    <div
        class="text-3xl md:text-4xl text-white lg:text-4xl font-medium text-left mb-8 bg-gradient-to-r rounded from-green-500 pl-4">
      <div class="flex justify-between items-center">
        <span class="capitalize">Latest {{ route.currentRoute.value.params.id }}</span>
        <NuxtLink class="rounded-md text-sm px-2 py-2 text-gray-500 hover:text-green-500 transition">
          Show More
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-4">
      <template
          v-for="post in sportsPosts"
          :key="post.id">
        <Card class="shadow-none border-none relative">
          <template #subtitle>
            <div :class="[
      'rounded-md px-2 py-1 w-fit text-white absolute left-2 top-2',
      useCategoryColor(post.category_name)
    ]">
              {{ post.category_name }}
            </div>

          </template>
          <template #header>
            <NuxtImg
                :src="post.image"
                :alt="post.title"
                class="h-[244.62px] rounded-md w-full object-fill"
                loading="lazy"
            />
          </template>
          <template #title>
            {{ post.title }}
          </template>
        </Card>
      </template>
    </div>
  </section>
</template>

<style scoped>

</style>