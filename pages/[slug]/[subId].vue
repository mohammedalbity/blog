<script setup lang="ts">
const route = useRoute()
const storePost = PostStore()
const subId = route.params.subId as string

callOnce(() => storePost.fetchPostsDetails(subId));

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
            <img :src="storePost.postDetails.image" alt="صورة توضيحية" class="w-full rounded-lg shadow-md">
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
            <h2 class="text-2xl font-bold text-gray-800 mb-4">commit (3)</h2>
            <!-- تعليق فردي -->
            <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div class="flex items-center mb-2">
                    <div class="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div class="ml-3">
                        <p class="font-semibold text-gray-800">محمد علي</p>
                        <p class="text-xs text-gray-500">قبل 3 ساعات</p>
                    </div>
                </div>
                <p class="text-gray-700">
                    مقال رائع! أعتقد أن الاستثمار في الطاقة المتجددة يجب أن يكون أولوية لكل الدول.
                </p>
            </div>

            <!-- تعليق فردي -->
            <div class="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div class="flex items-center mb-2">
                    <div class="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div class="ml-3">
                        <p class="font-semibold text-gray-800">نورة خالد</p>
                        <p class="text-xs text-gray-500">قبل يوم</p>
                    </div>
                </div>
                <p class="text-gray-700">
                    يجب أن نركز على التوعية بأهمية هذا الموضوع.
                </p>
            </div>

            <!-- نموذج إضافة تعليق -->
            <form class="bg-white p-4 rounded-lg shadow-sm mt-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">أضف تعليقًا</h3>
                <textarea
                        rows="4"
                        class="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="اكتب تعليقك هنا..."></textarea>
                <button
                        type="submit"
                        class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    إرسال
                </button>
            </form>
        </section>
    </div>
</template>

<style scoped>

</style>