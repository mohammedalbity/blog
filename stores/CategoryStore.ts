import type {Pagination, responseCategoryApi, Category} from "~/types/types";


export const CategoryStore = defineStore('CategoryStore', {
    state: () => ({
        categories: [] as Category[],
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
        async fetchCategories(page = 1, searchQuery = '') {
            this.isLoading = true;
            try {
                const response = await $fetch<responseCategoryApi>(`${useRuntimeConfig().public.baseUrl}/api/categories`, {
                    method: "get",
                    params: {
                        page,
                        name: searchQuery,
                    },
                    headers: getAuthHeaders(),
                });
                if (response.data) {
                    this.categories = response.data;
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
        async addCategory(category: any) {
            try {
                const response = await $fetch<Category>(`${useRuntimeConfig().public.baseUrl}/api/categories`, {
                    method: "post",
                    body: category,
                    headers: getAuthHeaders(),
                });
                if (response.category) {
                    this.categories.unshift(response.category);
                    this.message = response.message
                }
            } catch (error: any) {
                this.errors = Object.values(error.response._data.errors).flat();
            }

        },
        async updateCategory(categoryUpdate: any) {
            try {
                const response = await $fetch<Category>(`${useRuntimeConfig().public.baseUrl}/api/categories/${categoryUpdate.id}`, {
                    method: "PUT",
                    body: categoryUpdate,
                    headers: getAuthHeaders(),
                });

                const index = this.categories.findIndex(category => category.id === categoryUpdate.id);
                if (index !== -1) {
                    this.categories[index] = response.category;
                    this.message = response.message
                }


            } catch (error: any) {
                this.errors.push(error._data.errors);
            }
        },
        async deleteCategory(categoryId: any) {
            try {
                await $fetch<Category>(`${useRuntimeConfig().public.baseUrl}/api/categories/${categoryId}`, {
                    method: "DELETE",
                    headers: getAuthHeaders(),
                });

                this.categories = this.categories.filter(category => category.id !== categoryId)

            } catch (error: any) {
                this.errors.push(error._data.errors);
            }
        }
    }

})