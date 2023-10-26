module.exports = {
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',

            },
        },
        extend: {
            // fontFamily: {
            //     bungee: ['Bungee Shade'],
            //     raleway: ['Raleway']
            // },
        }
    },
    plugins: [require("@tailwindcss/typography")],
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
    
}
