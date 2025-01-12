// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    runtimeConfig: {
        public: {
            baseUrl: 'http://formrebeter.test',
        }
    },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap'
                },
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    modules: ['@primevue/nuxt-module', '@pinia/nuxt', '@nuxtjs/color-mode', 'nuxt-auth-sanctum', 'pinia-plugin-persistedstate/nuxt', '@vueuse/nuxt', '@nuxt/image'],
    sanctum: {
        baseUrl: 'http://formrebeter.test',
        mode: 'token',
        userStateKey: 'sanctum.user.identity',
        redirectIfAuthenticated: false,
        redirectIfUnauthenticated: true,

        endpoints: {
            csrf: 'sanctum/csrf-cookie',
            login: '/api/login',
            logout: '/api/logout',
            user: '/api/user',
        },
        csrf: {
            cookie: 'XSRF-TOKEN',
            header: 'X-XSRF-TOKEN',
        },

        redirect: {
            keepRequestedRoute: true,
            onLogin: '/users',
            onLogout: '/login',
            onAuthOnly: '/login',
            onGuestOnly: '/',
        },
        logLevel: 3,
        appendPlugin: true,
    },

    primevue: {
        autoImport: false,
        components: {
            include: ['Toast', 'Chart', 'Dialog', 'Select', 'Carousel', 'Menubar', 'ScrollTop', 'SplitButton', 'Galleria', 'Badge', 'UseConfirm', 'Editor', 'Forms', 'UseToast', 'ConfirmPopup', 'Skeleton', 'Column', 'IconField', 'InputIcon', 'DataTable', 'InputText', 'Card', 'Image', 'Button', 'Avatar', 'IconFiell'],
        },
        options: {
            ripple: true,
            inputVariant: 'outlined',
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.my-app-dark',
                    cssLayer: {
                        name: 'primevue',
                        order: 'tailwind-base, primevue, tailwind-utilities'
                    }
                }
            }
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})