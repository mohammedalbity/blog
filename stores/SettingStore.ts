import type {Setting} from "~/types/types";

export const SettingStore = defineStore('SettingStore', {
    state: () => ({
        websiteName: '',
        description: '',
        postCount: '',
        logo: ''
    }),
    actions: {
        async fetchSettings() {
            try {

                const response = await $fetch<Setting>(`${useRuntimeConfig().public.baseUrl}/api/setting`, {
                    method: 'GET',
                    headers: getAuthHeaders(),
                })
                if (response.websiteName || response.description || response.postCount) {
                    this.websiteName = response.websiteName
                    this.description = response.description
                    this.postCount = response.postCount
                    this.logo = response.logo
                    return response
                }
            } catch (error) {
                console.error(error)
            }
        },
        async updateSettings(setting: any) {
            const data1 = new FormData()
            data1.append('_method', 'PUT')
            data1.append('id', setting.id)
            data1.append('websiteName', setting.websiteName)
            data1.append('description', setting.description)
            data1.append('postCount', setting.postCount)
            data1.append('logo', setting.logo)
            try {
                await $fetch<Setting>(`${useRuntimeConfig().public.baseUrl}/api/setting/${setting.id}`, {
                    method: 'POST',
                    body: data1,
                    headers: getAuthHeaders(),
                });

            } catch (error) {
                console.error(error)
            }

        }
    },
    persist: piniaPluginPersistedstate.sessionStorage()
})