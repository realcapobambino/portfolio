<template>
    <!-- <AppHeader /> -->
    <!-- navbar -->
    <div class="md:container md:mx-auto pt-2">
        <div class="flex justify-between">
            <button type="button" class="bg-indigo-500" disabled>
                <div class=" hover:animate-spin h-5 w-5 mr-3">                    
                    <div class="p-2 m-2 bg-black rounded-full"></div>
                </div>
            </button>
            <div class="">
                <a href="/" class="text-xl normal-case btn btn-link md:text-5xl font-bungee">Capo Bambino</a>

            </div>
            <div class="">
                <button>Blog</button>
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


