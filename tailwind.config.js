module.exports = {
    theme: {
        screens: {

            sm: '640px',

            md: '768px',

            lg: '1024px',

            xl: '1280px',

        },
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
    plugins: [
        require("@tailwindcss/typography"),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'), require('tailwindcss-children'),
    ],
    content: [
        'content/**/*.md',
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],

    purge: [
        './src/**/*.html',
        './src/**/*.vue',
    ]

}
