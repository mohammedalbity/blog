import {defineStore} from "pinia";
import {PostStore} from "~/stores/PostStore";

export interface Chart {
    post: Record<string, number>;
    user: Record<string, number>;
    tag: Record<string, number>;
    chart: Chart;
}


export const useChartStore = defineStore("ChartStore", {
    state: () => ({
        chartPost: {} as Record<string, number>,
        chartUser: {} as Record<string, number>,
        chartTag: {} as Record<string, number>,
    }),

    actions: {
        async fetchChart() {
            try {
                const response = await $fetch<Chart>(`${useRuntimeConfig().public.baseUrl}/api/dashboard`, {
                    method: "GET",
                    headers: getAuthHeaders(),
                });
                if (response.post) {
                    this.chartPost = response.post
                    this.chartUser = response.user
                    this.chartTag = response.tag
                    return response
                }

            } catch
                (error) {
                console.log(error);
            }
        }
    },
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useChartStore, import.meta.hot))
}