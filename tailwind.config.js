module.exports = {
    theme: {
        extend: {
            fontFamily: {
                bungee: ['Bungee Shade'],
                raleway: ['Raleway']
            },
        }
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    content: [
        'content/**/*.md',
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],

    // daisyUI config (optional)
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
    },
}
