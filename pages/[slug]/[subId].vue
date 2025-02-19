<script setup lang="ts">
import {CommentStore} from "~/stores/CommentStore";
import {Form} from "@primevue/forms";
import {useCategoryColor} from "~/composables/CategoryColor";

const route = useRoute()
const storePost = PostStore()
const storeComment = CommentStore()
const subId = route.params.subId as string
const {status} = useAsyncData('PostStore', () => storePost.fetchPostsDetails(subId))
useAsyncData('CommentStore', () => storeComment.getCommentsByPostId(subId))
const comment = reactive({
    body: '',
    post_id: subId,
})

let isLoading = ref(false);
const saveComment = async () => {
    isLoading.value = true;
    await storeComment.addComment(comment)
    isLoading.value = false;
    comment.body = '';
}

const sportsPosts = computed(() =>
    storePost.posts.filter((post) => post.image !== '' && post.category_name === route.params.slug)
);

</script>

<template>
    <div class="max-w-4xl mx-auto p-4 space-y-8">

        <!-- العنوان الرئيسي -->
        <header class="space-y-4">
            <Skeleton v-if="status == 'pending'" class="w-1/2 h-10"/>
            <h1 v-if="status == 'success'" class="text-4xl font-extrabold text-gray-900 leading-snug">
                {{ storePost.postDetails.title }}
            </h1>

            <div class="flex items-center space-x-4">
                <Skeleton v-if="status == 'pending'" class="w-32 h-4"/>
                <p v-if="status == 'success'" class="text-sm text-gray-600">
                    By <span class="font-semibold text-gray-800">{{ storePost.postDetails.username }}</span> •
                    {{ storePost.postDetails.created_at }}
                </p>
            </div>
        </header>

        <!-- صورة المقال -->
        <figure v-if="storePost.postDetails.image" class="relative">
            <Skeleton v-if="status == 'pending'" class="w-full h-[400px] rounded-lg "/>
            <img v-if="status == 'success'" :src="storePost.postDetails.image" alt="صورة توضيحية"
                 class="w-full h-[400px] rounded-lg object-cover">
            <figcaption v-if="status == 'success'" class="text-sm text-gray-500 mt-2">{{
                    storePost.postDetails.title
                }}
            </figcaption>
        </figure>

        <!-- محتوى المقال -->
        <div v-if="status == 'pending'" class="space-y-4">
            <Skeleton v-for="i in 3" :key="i" width="100%" height="24px"/>
        </div>
        <article v-if="status == 'success'" class="prose lg:prose-lg prose-gray leading-relaxed">
            {{ storePost.postDetails.description }}
        </article>

        <!-- المقالات ذات الصلة -->
        <section>
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-3xl font-bold text-gray-900 capitalize">Related {{ route.params.slug }}</h2>
                <NuxtLink :to="`/${route.params.slug}`" class="text-green-600 hover:underline">Show More</NuxtLink>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <template v-for="post in sportsPosts.slice(0, 4)" :key="post.id">
                    <NuxtLink :to="`/${route.params.slug}/${post.id}`" class="block group">
                        <Card class=" rounded-lg overflow-hidden">
                            <template #header>
                                <NuxtImg :src="post.image" :alt="post.title"
                                         class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                         loading="lazy"/>
                            </template>
                            <template #title>
                                <h3 class="text-lg font-semibold mt-2">{{ post.title }}</h3>
                            </template>
                            <template #subtitle>
                                <span :class="['text-white text-xs px-2 py-1 rounded', useCategoryColor(post.category_name)]">
                                    {{ post.category_name }}
                                </span>
                            </template>
                        </Card>
                    </NuxtLink>
                </template>
            </div>
        </section>

        <!-- قسم التعليقات -->
        <section class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900">Comments ({{ storeComment.comments.length }})</h2>

            <!-- نموذج إضافة تعليق -->
            <div class="bg-gray-50 p-6 rounded-lg">
                <Form @submit="saveComment" class="space-y-4">
                    <h3 class="text-lg font-semibold">Add a comment</h3>
                    <textarea v-model="comment.body" rows="4"
                              class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                              placeholder="Share your thoughts..."></textarea>
                    <Button type="submit" :loading="isLoading" severity="success" label="Add Comment"/>
                </Form>
            </div>

            <!-- عرض التعليقات -->
            <div v-for="comment in storeComment.comments" :key="comment.id" class="bg-white p-4 rounded-lg">
                <div class="flex items-center mb-3">
                    <Avatar :image="comment.avatar"
                            :label="!comment.avatar ? comment.username.charAt(0).toUpperCase() : ''"
                            class="w-10 h-10 rounded-full"/>
                    <div class="ml-4">
                        <p class="font-semibold">{{ comment.username }}</p>
                        <p class="text-xs text-gray-500">{{ comment.created_at }}</p>
                    </div>
                </div>
                <p class="text-gray-700">{{ comment.body }}</p>
            </div>
        </section>

    </div>
</template>
<style scoped>

</style>