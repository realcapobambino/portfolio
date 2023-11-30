<template>
    <div class="mx-auto lg:container">
        <div class="py-2 mt-8 mb-8 text-center dark-mode-text">
            <h2 class="mb-6 text-4xl font-bold font-RussoOne">Skills</h2>
            <!--  -->
            <div class="">
                <ul class="flex flex-row justify-between pl-0 mb-5 overflow-x-scroll list-none border-b-0" role="tablist"
                    data-te-nav-ref>
                    <li role="presentation">
                        <a href="#tabs-languages"
                            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight  hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark-mode-text dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
                            data-te-toggle="pill" data-te-target="#tabs-languages" data-te-nav-active role="tab"
                            aria-controls="tabs-languages" aria-selected="true">Languages</a>
                    </li>
                    <li role="presentation">
                        <a href="#tabs-frameworks"
                            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight  hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark-mode-text dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
                            data-te-toggle="pill" data-te-target="#tabs-frameworks" role="tab"
                            aria-controls="tabs-frameworks" aria-selected="false">Frameworks & Libraries</a>
                    </li>
                    <li role="presentation">
                        <a href="#tabs-databases"
                            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight  hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark-mode-text dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
                            data-te-toggle="pill" data-te-target="#tabs-databases" role="tab" aria-controls="tabs-databases"
                            aria-selected="false">Databases</a>
                    </li>
                    <li role="presentation">
                        <a href="#tabs-tools"
                            class=" my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight  hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark-mode-text dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
                            data-te-toggle="pill" data-te-target="#tabs-tools" role="tab" aria-controls="tabs-tools"
                            aria-selected="false">Tools</a>
                    </li>

                    <!-- <li role="presentation">
                    <a href="#tabs-systems"
                        class=" my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight  hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark-mode-text dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill" data-te-target="#tabs-systems" role="tab" aria-controls="tabs-systems"
                        aria-selected="false">Systems</a>
                </li> -->
                </ul>
            </div>
        </div>

        <!--Tabs content-->
        <div class="mb-6">
            <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-languages" role="tabpanel" aria-labelledby="tabs-languages-tab" data-te-tab-active>
                <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
                    <div v-for="language in languages" :key="language.name" class="text-center font-ShortStack"
                        data-aos="fade-up" :data-aos-duration="300">
                        <img :src="language.icon" :alt="language.name" :class="language.class" alt=""
                            class="w-16 h-16 mx-auto">
                        <p class="mt-2">{{ language.name }}</p>
                    </div>
                </div>
            </div>
            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-frameworks" role="tabpanel" aria-labelledby="tabs-frameworks-tab">
                <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
                    <div v-for="framework in frameworks" :key="framework.name" class="text-center font-ShortStack"
                        data-aos="fade-up" :data-aos-duration="300">
                        <img :src="framework.icon" :alt="framework.name" :class="class" class="w-16 h-16 mx-auto">
                        <p class="mt-2">{{ framework.name }}</p>
                    </div>
                </div>
            </div>
            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-databases" role="tabpanel" aria-labelledby="tabs-databases-tab">
                <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
                    <div v-for="database in databases" :key="database.name" class="text-center font-ShortStack"
                        data-aos="fade-up" :data-aos-duration="300">
                        <img :src="database.icon" :alt="database" :class="database.class" class="w-16 h-16 mx-auto">
                        <p class="mt-2">{{ database.name }}</p>
                    </div>
                </div>
            </div>
            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-tools" role="tabpanel" aria-labelledby="tabs-tools-tab">
                <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
                    <div v-for="tool in tools" :key="tool.name" class="text-center font-ShortStack" data-aos="fade-up"
                        :data-aos-duration="300">
                        <img :src="tool.icon" :alt="tools.name" class="w-16 h-16 mx-auto">
                        <p class="mt-2">{{ tool.name }}</p>
                    </div>
                </div>
            </div>
            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-operatingsystems" role="tabpanel" aria-labelledby="tabs-operatingsystems-tab">
                <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
                    <div v-for="operatingsystem in operatingsystems" :key="operatingsystem.name"
                        class="text-center font-ShortStack" data-aos="fade-up" :data-aos-duration="300">
                        <img :src="operatingsystem.icon" :alt="operatingsystem.name" class="w-16 h-16 mx-auto">
                        <p class="mt-2">{{ operatingsystem.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    <!-- <div class="py-2 mx-auto mt-8 mb-8 text-center lg:container dark-mode-text">
        <h2 class="mb-6 text-4xl font-bold font-RussoOne">Skills</h2>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
            <div v-for="skill in skills" :key="skill.name" class="text-center font-ShortStack" data-aos="fade-up"
                :data-aos-duration="300">
                <img :src="skill.icon" :alt="skill.name" :class="class" class="w-16 h-16 mx-auto" loading="lazy">
                <p class="mt-2">{{ skill.name }}</p>
            </div>
        </div>
    </div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos';
import {
    Tab,
    initTE,
} from "tw-elements";
onMounted(() => {
    AOS.init();
    initTE({ Tab });
})
// Initialization for ES Users




const languages = ref([
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Python', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg ' },
    { name: 'Rust', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg ' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Technically not a language' },
    { name: 'Markdown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg', description: 'Technically not a language' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: 'Technically not a language' },
]);

const frameworks = ref([
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'FastAPI', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg ' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
    { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'JQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
    { name: 'Socket.io', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg ' },
    // { name: 'Webpack', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg ' },
    { name: 'Vuetify', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg ' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    // { name: 'qt', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg ' },
    { name: 'TypeScript', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg ' },
])

const databases = ref([
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MongoDB', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg ' },
    { name: 'MySQL', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg ' },
    { name: 'PostgreSQL', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg ' },
    { name: 'Redis', icon: '  https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'SQlite', icon: '  https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
])

const tools = ref([
    { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg', class: 'text-primary' },
    // { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'VScode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', },
    { name: 'Gimp', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg' },
    { name: 'Wordpress', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg ' },
    { name: 'Yarn', icon: ' https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg ' },
    { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }
])


const operatingsystems = ref([
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' }
])


</script>
          