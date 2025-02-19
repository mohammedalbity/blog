<!--<template class="bg-[#F2F2F2]">
    &lt;!&ndash; Galleria Section &ndash;&gt;

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


    &lt;!&ndash; Posts Section &ndash;&gt;
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

    &lt;!&ndash; Sports Section &ndash;&gt;
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
</template>-->
<template class="bg-[#F2F2F2] relative">
    <!-- Galleria Section -->
    <div class="card mt-8 container bg-white rounded-lg p-6  grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="col-span-1 md:col-span-2">
            <Galleria
                    :value="filteredPostsWithImages"
                    :responsiveOptions="responsiveOptions"
                    :numVisible="5"
                    :auto-play="true"
                    :circular="true"
            >
                <template #item="slotProps">
                    <NuxtImg
                            class="object-cover w-full h-96 rounded-lg"
                            :src="slotProps.item.image"
                            :alt="slotProps.item.title"
                            loading="lazy"
                    />
                </template>
                <template #thumbnail="slotProps">
                    <NuxtImg
                            class="object-cover h-24 rounded-md"
                            :src="slotProps.item.image"
                            :alt="slotProps.item.title"
                            loading="lazy"
                    />
                </template>
            </Galleria>
        </div>
        <div class="flex items-center justify-center border border-gray-300 rounded-lg p-4">
            <span class="text-gray-600">Advertising Space</span>
        </div>
    </div>

    <!-- Posts Section -->
    <section class="mt-10 bg-white rounded-lg  p-6">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-4xl font-bold text-gray-900">Latest News</h2>
            <NuxtLink class="text-sm px-4 py-2 text-gray-600 hover:text-green-500 transition rounded-md" to="/news">Show
                More
            </NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
            <template v-for="post in filteredPostsWithImages.slice(0,8)" :key="post.id">
                <NuxtLink :to="`/${post.category_name}/${post.id}`" class="block group">
                    <Card class=" rounded-lg overflow-hidden">
                        <template #header>
                            <div
                                    :class="['absolute left-4 top-4 px-3 py-1 text-white rounded-md', useCategoryColor(post.category_name)]"
                            >
                                {{ post.category_name }}
                            </div>
                            <NuxtImg
                                    :src="post.image"
                                    :alt="post.title"
                                    class="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                            />
                        </template>
                        <template #title>
                            <h3 class="mt-4 text-lg font-semibold text-gray-800">{{ post.title }}</h3>
                        </template>
                    </Card>
                </NuxtLink>
            </template>
        </div>
    </section>

    <!-- Sports Section -->
    <section class="mt-10 bg-white rounded-lg  p-6">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-4xl font-bold text-gray-900">Latest Sports</h2>
            <NuxtLink class="text-sm px-4 py-2 text-gray-600 hover:text-green-500 transition rounded-md" to="/sports">
                Show More
            </NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <template v-for="post in sportsPosts" :key="post.id">
                <NuxtLink :to="`/${post.category_name}/${post.id}`" class="block group">
                    <Card class="rounded-lg overflow-hidden">
                        <template #header>
                            <NuxtImg
                                    :src="post.image"
                                    :alt="post.title"
                                    class="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                            />
                        </template>
                        <template #title>
                            <h3 class="mt-4 text-lg font-semibold text-gray-800">{{ post.title }}</h3>
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
