/** @type {string[]} */
export const content = [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./composables/*.{js,vue,ts}"
];
export const plugins = [import('tailwindcss-primeui')];