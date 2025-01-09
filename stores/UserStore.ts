import {defineStore} from "pinia";
import type {Pagination, responseUserApi, User} from "~/types/types";
import {useToast} from "primevue/usetoast";

export const storeUser = defineStore('storeUser', {
    state: () => ({
        users: [] as User[],
        pagination: {
            current_page: 1,
            total: 0,
            per_page: 10,
        } as Pagination,
        messages: null,
        messageUpdated: null,
        searchQuery: '',
        errors: [] as any[],
    }),
    persist: {
        storage: piniaPluginPersistedstate.sessionStorage(),
    },
    actions: {
        async fetchUsers(page = 1, searchQuery = '') {

            try {
                const response = await $fetch<responseUserApi>(`${useRuntimeConfig().public.baseUrl}/api/users`, {
                    method: "GET",
                    params: {
                        page,
                        name: searchQuery,
                    },
                    headers: getAuthHeaders(),
                });

                if (response.data) {
                    this.users = response.data;
                    this.pagination.current_page = response.meta.current_page;
                    this.pagination.total = response.meta.total;
                    this.pagination.per_page = response.meta.per_page;
                    return response
                }
            } catch (errors: any) {
                console.log(errors)
            }

        },

        async addUser(item: any) {
            const data = new FormData();
            data.append('email', item.email);
            data.append('password', item.password);
            data.append('name', item.name);
            data.append('phone', item.phone);
            data.append('message', item.email);
            if (item.avatar) {
                data.append('avatar', item.avatar);
            }
            try {
                const response = await $fetch<User>(`${useRuntimeConfig().public.baseUrl}/api/users`, {
                    method: 'POST',
                    body: data,
                    headers: getAuthHeaders(),
                })
                if (response.user) {
                    this.users.unshift(response.user);
                    this.messages = response.message
                }
            } catch (error: any) {
                this.errors = error._data.errors
            }
        },
        async updateUser(updateUser: any) {
            const data = new FormData();
            data.append('_method', 'PUT');
            data.append('id', updateUser.id);
            data.append('email', updateUser.email);
            data.append('password', updateUser.password);
            data.append('name', updateUser.name);
            data.append('phone', updateUser.phone);
            data.append('message', updateUser.email);
            if (updateUser.avatar) {
                data.append('avatar', updateUser.avatar);
            }
            try {
                const response = await $fetch<User>(`${useRuntimeConfig().public.baseUrl}/api/users/${updateUser.id}`, {
                    method: 'POST',
                    body: data,
                    headers: getAuthHeaders()
                })
                if (response.user) {
                    const index = this.users.findIndex(user => user.id == updateUser.id);
                    if (index !== -1) {
                        this.users[index] = response.user;
                        this.messages = response.message
                    }
                }
            } catch (error: any) {
                this.errors = error._data.errors
            }
        },
        async deleteUser(deleteUser: any) {
            try {
                await $fetch<User>(`${useRuntimeConfig().public.baseUrl}/api/users/${deleteUser}`, {
                    method: 'DELETE',
                    headers: getAuthHeaders(),
                });

                this.users = this.users.filter(user => user.id !== deleteUser.id);

            } catch (e) {
                console.error(e);
            }

        }

    },


});