import {defineStore} from "pinia";
import type {Pagination, Post, responsePostApi} from "~/types/types";
import {TagStore} from "~/stores/TagStore";


export const PostStore = defineStore('PostStore', {
        state: () => ({
            posts: [] as Post[],
            searchQuery: '',
            pagination: {
                current_page: 1,
                total: 0,
                per_page: 10,
            } as Pagination,
            message: null,
            messageUpdate: null,
            errors: [] as any[],
            postDetails: null as any | null,
        }),
        persist: {
            storage: piniaPluginPersistedstate.sessionStorage(),
        },
        actions: {
            async fetchPosts(page = 1, searchQuery = '') {
                try {
                    const response = await $fetch<responsePostApi>(`${useRuntimeConfig().public.baseUrl}/api/posts`, {
                        method: 'get',
                        params: {
                            page,
                            title: searchQuery,
                        },
                        headers: getAuthHeaders(),
                    });

                    if (response.data) {
                        this.posts = response.data;
                        this.pagination.current_page = response.meta.current_page;
                        this.pagination.total = response.meta.total;
                        this.pagination.per_page = response.meta.per_page;
                        return response
                    }

                } catch (errors: any) {
                }
            },
            async fetchPostsDetails(post: string) {
                const response = await $fetch<Post>(`${useRuntimeConfig().public.baseUrl}/api/posts/${post}`, {
                    method: 'get',
                    headers: getAuthHeaders(),
                })
                if (response.post) {
                    this.postDetails = response.post
                    return response.post
                }

            },
            async addPost(item
                          :
                          any
            ) {
                const data3 = new FormData();
                data3.append('title', item.title);
                data3.append('description', item.description);
                data3.append('category_id', item.category_id.id);
                data3.append('image', item.image);
                try {
                    const response = await $fetch<Post>(`${useRuntimeConfig().public.baseUrl}/api/posts`, {
                        method: 'POST',
                        body: data3,
                        headers: getAuthHeaders(),
                    })
                    if (response.post) {
                        this.posts.unshift(response.post);
                        this.message = response.message;
                    }
                } catch (errors: any) {
                    this.errors = Object.values(errors.response._data.errors).flat()
                }
            },
            async updatePost(updateItem: any) {
                const data1 = new FormData();
                data1.append('_method', 'PUT');
                data1.append('id', updateItem.id);
                data1.append('title', updateItem.title);
                data1.append('description', updateItem.description);
                data1.append('category_id', updateItem.category_id);
                if (updateItem.image) {
                    data1.append('image', updateItem.image);
                }
                try {
                    const response = await $fetch<Omit<Post, "id">>(`${useRuntimeConfig().public.baseUrl}/api/posts/${updateItem.id}`, {
                        method: 'POST',
                        body: data1,
                        headers: getAuthHeaders(),
                    })
                    const index = this.posts.findIndex(post => post.id === post.id);
                    if (index !== -1) {
                        this.posts[index] = response.post;
                        this.messageUpdate = response.message;
                    }

                } catch (errors: any) {
                    if (errors.response._data.errors) {
                        const error = errors.response._data.errors;
                        this.errors = Object.values(error).flat()
                    }
                }
            }
            ,
            async deletePost(deleteItem: number) {
                try {
                    await $fetch<Post>(`${useRuntimeConfig().public.baseUrl}/api/posts/${deleteItem}`, {
                        method: 'DELETE',
                        headers: getAuthHeaders(),
                    });
                    this.posts = this.posts.filter(post => post.id !== deleteItem);
                } catch (error) {
                    console.error(error);
                }
            }
        }
    })
;
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(PostStore, import.meta.hot))
}