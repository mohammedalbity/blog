<script setup lang="ts">
import {CommentStore} from "~/stores/CommentStore";
import {Form} from "@primevue/forms";

const route = useRoute()
const storePost = PostStore()
const storeComment = CommentStore()
const subId = route.params.subId as string
useAsyncData('PostStore', () => storePost.fetchPostsDetails(subId))
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

</script>

<template>
    <div class="max-w-4xl mx-auto p-4">

        <!-- العنوان الرئيسي -->
        <header class="mb-6">
            <h1 class="text-4xl font-bold text-gray-900 leading-tight">
                {{ storePost.postDetails.title }}
            </h1>
            <p class="text-sm text-gray-600 mt-2">
                by <span class="font-semibold text-gray-800">{{ storePost.postDetails.username }}</span> |
                {{ storePost.postDetails.created_at }}
            </p>
        </header>

        <!-- صورة المقال -->
        <figure v-if="storePost.postDetails.image" class="mb-6">
            <img :src="storePost.postDetails.image" alt="صورة توضيحية" class="w-full h-[394px] rounded-lg shadow-md">
            <figcaption class="text-sm text-gray-500 mt-2">
                {{ storePost.postDetails.title }}
            </figcaption>
        </figure>

        <!-- محتوى المقال -->
        <article class="prose lg:prose-lg prose-gray text-justify leading-relaxed">
            {{ storePost.postDetails.description }}
        </article>

        <!-- قسم التعليقات -->
        <section class="mt-12">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">commit ({{
                    storeComment.comments.length
                }})</h2>
            <!-- تعليق فردي -->
            <div v-for="comment in storeComment.comments" class="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div class="flex items-center mb-3">
                    <div class="w-10 h-10 rounded-full  flex-shrink-0">
                        <Avatar
                                :image="comment.avatar || undefined"
                                :label="!comment.avatar ? comment.username.charAt(0).toUpperCase() : ''"
                                class="mt-0"
                                size="large"
                                style="background-color: #ece9fc; color: #2a1261"
                                shape="circle"
                        />
                    </div>
                    <div class="ml-5">
                        <p class="font-semibold text-gray-800">{{ comment.username }}</p>
                        <p class="text-xs text-gray-500">{{ comment.created_at }}</p>
                    </div>
                </div>
                <p class="text-gray-700 ml-16">
                    {{ comment.body }}
                </p>
            </div>
            <!-- نموذج إضافة تعليق -->
            <div class="bg-white p-4 rounded-lg shadow-sm mt-6">
                <Form @submit="saveComment">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">Add a comment</h3>
                    <textarea v-model="comment.body"
                              rows="4"
                              class="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              placeholder="Share what you feel..."></textarea>
                    <Button type="submit" :loading="isLoading" severity="info" label="add comment"></Button>
                </Form>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>