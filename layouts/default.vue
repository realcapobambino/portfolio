<template>
    <!-- <AppHeader /> -->
    <!-- navbar -->
    <div class="md:container md:mx-auto">
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a href="/">Homepage</a></li>

                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <a href="/" class="text-xl normal-case btn btn-link md:text-5xl font-bungee">Capo Bambino</a>

            </div>
            <div class="navbar-end">
                <!-- search icon -->
                <!-- <button class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button> -->
                <!-- bell icon -->
                <!-- <button class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span class="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button> -->

                <form class="flex">
                    <svg class="pr-1 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5c0 .12.05.23.13.33c.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4c0-3.86-3.59-7-8-7z" />
                        <circle cx="6.5" cy="11.5" r="1.5" fill="currentColor" />
                        <circle cx="9.5" cy="7.5" r="1.5" fill="currentColor" />
                        <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor" />
                        <circle cx="17.5" cy="11.5" r="1.5" fill="currentColor" />
                    </svg>
                    <select class="mt-1 select select-ghost select-xs" v-model="colorMode.preference">
                        <option disabled selected>Theme</option>
                        <option v-for="theme of themes" :key="theme">{{ theme }}
                        </option>
                    </select>
                </form>
            </div>
        </div>
    </div>





    <!--  -->
    <!--  -->
    <!-- Main Page Content Goes Here -->




    <slot />



    <!--  -->
    <!--  -->
    <!-- Footer -->
    <!-- <AppFooter /> -->

    <footer class="p-10 footer bg-neutral text-neutral-content ">
        <div class="flex mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <rect x="0" y="0" width="48" height="48" fill="none" stroke="none" />
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                    d="M38 30H10a6 6 0 0 0 0 12h28a6 6 0 0 0 0-12Zm-2-8a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM4 14l9-9l9 9l-9 9l-9-9Z" />
            </svg>
            <p>BossBaby Inc.<br />Contributing to Entropy since 2004</p>
        </div>
        <div class="mx-auto">
            <span class="footer-title">Contact me</span>
            <div class="grid grid-flow-col gap-4">
                <a href="twitter.com/realcapobambino"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" class="fill-current">
                        <path
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                        </path>
                    </svg></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" class="fill-current">
                        <path
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                        </path>
                    </svg></a>
                <a href="portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        class="fill-current">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                        </path>
                    </svg></a>
                <a href="github.com/realcapobambino"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M5.688 5S5 6.207 5 8.25c0 1.355.309 2.07.531 2.438C3.97 12.312 3 14.515 3 17.343C3 24.586 7.59 27 16 27s13-2.414 13-9.656c0-2.926-.914-5.125-2.406-6.719A7.833 7.833 0 0 0 26.344 5c-3.102 0-5.688 2.383-5.782 2.469A21.466 21.466 0 0 0 16 7c-1.605 0-3.18.195-4.656.563C9.266 5.502 6.758 5 5.688 5zm15 10.438c.843-.008 1.625.062 2.312.28c1.832.583 3 2.266 3 4.157C26 25.109 23.191 26 16 26c-5.344 0-9.688-.941-9.688-5.938c0-1.906 1.036-2.984 1.782-3.656c1.64-1.476 4.23-.75 7.906-.75c1.672 0 3.277-.203 4.688-.219zM10.5 18c-.828 0-1.5.895-1.5 2s.672 2 1.5 2s1.5-.895 1.5-2s-.672-2-1.5-2zm11 0c-.828 0-1.5.895-1.5 2s.672 2 1.5 2s1.5-.895 1.5-2s-.672-2-1.5-2zm-11.156.844c.234 0 .406.199.406.437c0 .239-.172.438-.406.438a.444.444 0 0 1-.438-.438c0-.238.203-.437.438-.437zm11 0c.234 0 .406.199.406.437c0 .239-.172.438-.406.438a.444.444 0 0 1-.438-.438c0-.238.203-.437.438-.437z" />
                    </svg></a>
            </div>
        </div>
    </footer>

    <!--  -->
</template>

<script setup>
import 'animate.css';

const colorMode = useColorMode();
const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
]

// console.log(colorMode.preference)

</script>


