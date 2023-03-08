module.exports = {
    theme: {},
    plugins: [require("daisyui")],
    content: [
        'content/**/*.md',
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
}
