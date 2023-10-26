<template>
    <!-- <AppHeader /> -->
    <!-- navbar -->
    <div class="md:container md:mx-auto pt-2">
        <div class="flex justify-between p-2">
            <div class="flex">      
               
            </div>           
            <div class="md:hidden">
                <button>| LINKS |</button>
            </div>
             <div class="flex sm:max">
                    <div class="">
                        <a href="/blog"
                            class="font-bold text-2xl border-indigo-500 border-solid border-2 p-2 m-2 hover:bg-indigo-500 duration-500 ease-in-out rounded-xl ">Blog</a>
                    </div>
                    <div class="">
                        <a href="/about"
                            class="font-bold text-2xl border-indigo-500 border-solid border-2 p-2 m-2 hover:bg-indigo-500 duration-500 ease-in-out rounded-xl ">About</a>
                    </div>
                </div>
        </div>
    </div>
    <!--  -->
    <slot />
    <!--  -->
    <footer class="p-8">
        <div class="container flex mx-auto justify-center">
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
// console.log(colorMode.preference)

</script>


