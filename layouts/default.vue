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
                    <!-- <ul tabindex="0"
                        class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a href="/">Homepage</a></li>

                        <li><a href="contact">Contact</a></li>
                    </ul> -->
                </div>
            </div>
            <div class="navbar-center">
                <a href="/" class="text-xl normal-case btn btn-link md:text-5xl font-bungee">Capo Bambino</a>

            </div>
            <div class="navbar-end">
                
                 

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
                        <option disabled selected> Theme</option>
                        <option v-for="theme of themes" :key="theme">


                            {{ theme }}
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


