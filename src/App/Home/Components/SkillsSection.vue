<template>
    <div class="py-2 mx-auto mt-8 mb-8 text-center lg:container dark-mode-text">
        <h2 class="mb-6 text-4xl font-bold font-RussoOne">Skills</h2>
        <div class="grid grid-cols-3 gap-2 lg:grid-cols-6">
            <div v-for="skill in skills" :key="skill.name" class="text-center font-ShortStack" data-aos="fade-up"
                :data-aos-duration="300">
                <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 mx-auto" loading="lazy">
                <p class="mt-2">{{ skill.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos';
onMounted(() => {
    AOS.init();
})

const skills = ref([
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
    { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VScode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Gimp', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'JQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Markdown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg' },
    { name: 'MongoDB', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg ' },
    { name: 'MySQL', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg ' },
    { name: 'PostgreSQL', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg ' },
    { name: 'Python', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg ' },
    { name: 'qt', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg ' },
    { name: 'Redis', icon: '  https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Rust', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg ' },
    { name: 'Socket.io', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg ' },
    { name: 'SQlite', icon: '  https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    { name: 'TypeScript', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg ' },
    { name: 'Webpack', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg ' },
    { name: 'Wordpress', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg ' },
    { name: 'Yarn', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg ' },
    { name: 'FastAPI', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg ' },
    { name: 'Vuetify', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg ' },
    { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }










]);
</script>
          