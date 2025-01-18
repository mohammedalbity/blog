import type {Comment, Pagination, responseCommentApi} from "~/types/types";


export const CommentStore = defineStore("CommentStore", {
    state: () => ({
        comments: [] as Comment[],
        pagination: {
            current_page: 1,
            per_page: 10,
            total: 0,
        } as Pagination,
        searchQuery: '',
        message: null,
        errors: [] as any[],
    }),
    actions: {
        async getCommentsByPostId(postId: string) {
            try {
                const response = await $fetch<responseCommentApi>(`${useRuntimeConfig().public.baseUrl}/api/comments/${postId}`, {
                    method: 'GET',
                    mode: 'cors',
                    headers: getAuthHeaders(),
                })
                if (response.comment) {
                    this.comments = response.comment
                    return response.comment
                }
            } catch (error) {
                console.log(error);
            }
        },
        async addComment(comment: any) {
            try {
                const response = await $fetch<Comment>(`${useRuntimeConfig().public.baseUrl}/api/comments`, {
                    method: 'POST',
                    body: comment,
                    headers: getAuthHeaders(),
                })
                if (response.comment) {
                    this.comments.unshift(response.comment)
                }

            } catch (error) {
                console.log(error);
            }
        }
    }

})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(CommentStore, import.meta.hot))
}