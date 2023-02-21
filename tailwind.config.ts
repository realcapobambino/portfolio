import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {},
    plugins: [],
    content: [
        'content/**/*.md'
    ],
    darkMode: 'class',
}
