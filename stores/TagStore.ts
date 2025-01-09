import type {Pagination, responseTagApi, Tag} from "~/types/types";


export const TagStore = defineStore('tagStore', {
    state: () => ({
        tags: [] as Tag[],
        pagination: {
            current_page: 1,
            per_page: 10,
            total: 0,
        } as Pagination,
        searchQuery: '',
        isLoading: false,
        message: null,
        errors: [] as any[],
    }),
    persist: {
        storage: piniaPluginPersistedstate.sessionStorage(),
    },
    actions: {
        async fetchTags(page = 1, searchQuery = '') {
            this.isLoading = true;
            try {
                const response = await $fetch<responseTagApi>(`${useRuntimeConfig().public.baseUrl}/api/tags`, {
                    method: "get",
                    params: {
                        page,
                        name: searchQuery,
                    },
                    headers: getAuthHeaders(),
                });
                if (response.data) {
                    this.tags = response.data;
                    this.pagination.current_page = response.meta.current_page;
                    this.pagination.per_page = response.meta.per_page;
                    this.pagination.total = response.meta.total;
                    return response
                }
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false;
            }

        },
        async addTag(tag: any) {
            try {
                const response = await $fetch<Tag>(`${useRuntimeConfig().public.baseUrl}/api/tags`, {
                    method: "post",
                    body: tag,
                    headers: getAuthHeaders(),
                });
                if (response.tag) {
                    this.tags.unshift(response.tag);
                    this.message = response.message
                }
            } catch (error: any) {
                this.errors = Object.values(error.response._data.errors).flat();
            }

        },
        async updateTag(tag: any) {
            try {
                const response = await $fetch<Tag>(`${useRuntimeConfig().public.baseUrl}/api/tags/${tag.id}`, {
                    method: "PUT",
                    body: tag,
                    headers: getAuthHeaders()
                });

                const index = this.tags.findIndex(tag => tag.id === tag.id);
                if (index !== -1) {
                    this.tags[index] = response.tag;
                    this.message = response.message
                }


            } catch (error: any) {
                this.errors.push(error._data.errors);
            }
        },
        async deleteTag(tagId: any) {
            try {
                await $fetch<Tag>(`${useRuntimeConfig().public.baseUrl}/api/tags/${tagId}`, {
                    method: "DELETE",
                    headers: getAuthHeaders(),
                });
                this.tags = this.tags.filter(tag => tag.id !== tagId)
            } catch (error: any) {
                this.errors.push(error._data.errors);
            }
        }
    }

})