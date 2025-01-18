<template class="bg-[#F2F2F2]">
    <!-- Galleria Section -->

    <div class="card mt-5 grid grid-rows-1 container bg-white rounded p-4 md:grid-cols-3 gap-1">
        <div class="col-span-1 md:col-span-2">
            <Galleria
                    :value="filteredPostsWithImages"
                    :responsiveOptions="responsiveOptions"
                    :numVisible="5"
                    :auto-play="true"
                    :circular="true"
            >
                <template #item="slotProps" key="item">
                    <NuxtImg
                            class="object-fill w-full h-80"
                            :src="slotProps.item.image"
                            :alt="slotProps.item.title"
                            loading="lazy"
                    />
                </template>
                <template #thumbnail="slotProps">
                    <NuxtImg
                            class="object-fill h-20"
                            :src="slotProps.item.image"
                            :alt="slotProps.item.title"
                            loading="lazy"
                    />
                </template>
            </Galleria>
        </div>
        <div class="bg-white flex items-center justify-center border border-gray-300 rounded-md">
            <span>Advertising space</span>
        </div>
    </div>


    <!-- Posts Section -->
    <section class="mt-5 bg-white rounded ">
        <div
                class="text-3xl md:text-4xl text-white lg:text-4xl font-medium text-left mb-8 bg-gradient-to-r rounded from-green-500 pl-4">
            <div class="flex justify-between items-center">
                <span>Latest News</span>
                <NuxtLink class="rounded-md text-sm px-2 py-2 text-gray-500 hover:text-green-500 transition">
                    Show More
                </NuxtLink>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-4">
            <template v-for="post in filteredPostsWithImages.slice(0,8)" :key="post.id">
                <NuxtLink :to="`/${post.category_name}/${post.id}`">
                    <Card class="shadow-none border-none relative">
                        <template #header>
                            <div
                                    :class="[
      'rounded-md px-2 py-1 w-fit text-white absolute left-2 top-2',
      useCategoryColor(post.category_name)
    ]">
                                {{ post.category_name }}
                            </div>
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
                </NuxtLink>
            </template>
        </div>
    </section>

    <!-- Sports Section -->
    <section class="mt-5 bg-white rounded ">
        <div
                class="text-3xl md:text-4xl text-white lg:text-4xl font-medium text-left mb-8 bg-gradient-to-r rounded from-green-500 pl-4">
            <div class="flex justify-between items-center">
                <span>Latest Sports</span>
                <NuxtLink class="rounded-md text-sm px-2 py-2 text-gray-500 hover:text-green-500 transition">
                    Show More
                </NuxtLink>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-4">
            <template
                    v-for="post in sportsPosts"
                    :key="post.id">
                <NuxtLink :to="`/${post.category_name}/${post.id}`">
                    <Card class="shadow-none border-none ">
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
                </NuxtLink>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
// Middleware for authentication

import {useCategoryColor} from "~/composables/CategoryColor";

definePageMeta({
    middleware: ['sanctum:auth'],
});

// SEO meta tags
useSeoMeta({
    title: 'Blog - Latest News & Sports',
    description: 'Stay updated with the latest news and sports highlights. Explore trending topics and featured articles.',
    ogTitle: 'Blog - Latest News & Sports',
    ogDescription: 'Discover the latest news and sports articles.',
    ogImage: '/default-thumbnail.jpg', // Adjust default image
});

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4,
    },
    {
        breakpoint: '575px',
        numVisible: 1,
    },
]);

// Store and filtered data
const storePost = PostStore();
await callOnce(storePost.fetchPosts);

const filteredPostsWithImages = computed(() =>
    storePost.posts.filter((post) => post.image !== '')
);

const sportsPosts = computed(() =>
    storePost.posts.filter((post) => post.image !== '' && post.category_name === 'sports')
);
</script>
