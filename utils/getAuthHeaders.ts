export function getAuthHeaders() {
    const auth_token = useCookie('sanctum.token.cookie');
    return {
        Authorization: `Bearer ${auth_token.value}`,
    };
}