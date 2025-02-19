// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: ['@primevue/nuxt-module', '@pinia/nuxt', '@nuxtjs/color-mode', 'nuxt-auth-sanctum', 'pinia-plugin-persistedstate/nuxt', '@vueuse/nuxt', '@nuxt/image', '@vite-pwa/nuxt'],
    pinia: {
        storesDirs: ['./stores/**'],
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    primevue: {
        autoImport: false,
        components: {
            include: ['Toast', 'Chart', 'Drawer', 'progressspinner', 'Dialog', 'Select', 'Carousel', 'Menubar', 'ScrollTop', 'SplitButton', 'Galleria', 'Badge', 'UseConfirm', 'Editor', 'Forms', 'UseToast', 'ConfirmPopup', 'Skeleton', 'Column', 'IconField', 'InputIcon', 'DataTable', 'InputText', 'Message', 'Card', 'Image', 'Button', 'Avatar', 'IconFiell'],
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
                        order: "base, primevue",
                    }
                }
            }
        }
    },

    pwa: {
        strategies: 'generateSW',
        srcDir: 'service-worker',
        filename: 'sw.ts',
        registerType: 'autoUpdate',
        manifest: {
            name: 'Nuxt Vite PWA',
            short_name: 'NuxtVitePWA',
            theme_color: '#ffffff',
            background_color: '#f0f0f0',
            start_url: '/dashboard',
            icons: [{src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png"},
                {src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png"}],
            display: "standalone"
        },
        workbox: {
            globPatterns: ['**/*.{js,css,html,png,svg,ico,json,woff2,ttf,woff,eot}'],
            cleanupOutdatedCaches: true,
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/api\.example\.com\/.*$/,
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'api-cache',
                        expiration: {
                            maxEntries: 50,
                            maxAgeSeconds: 86400, // يوم واحد
                        },
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
                {
                    urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'image-cache',
                        expiration: {
                            maxEntries: 50,
                            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 يومًا
                        },
                    },
                },
                {
                    urlPattern: /.*/,
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'default-cache',
                        networkTimeoutSeconds: 10,
                    },
                },
            ],
        },
        injectManifest: {
            globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
            globIgnores: [
                '**/node_modules/**/*',
                '**/sw.js',
                '**/sw.js.map',
                '**/workbox-*.js',

            ]
        },
        client: {
            installPrompt: true,
            periodicSyncForUpdates: 3600, // تحديث كل ساعة
        },
        devOptions: {
            enabled: false,
            suppressWarnings: false, // تعطيل التحذيرات فقط في أثناء التطوير
            navigateFallback: '/dashboard',
            navigateFallbackAllowlist: [/^\/(?!dev-sw\.js|sw\.ts).*$/],
            type: 'module',
        },
    },
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
})