

<script setup>
import { ref } from 'vue';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-vue-next'

const socialMediaLinks = ref({
    twitter: 'https://twitter.com/realcapobambino',
    instagram: 'https://www.instagram.com/realcapobambino/',
    linkedin: 'https://www.linkedin.com/in/charleswahome/',
    github: 'https://github.com/realcapobambino',

})

const getSocialMediaIcon = (platform) => {
    switch (platform) {
        case 'twitter':
            return Twitter;
        case 'instagram':
            return Instagram;
        case 'linkedin':
            return Linkedin;
        case 'github':
            return Github;
        default:
            return null;
    }
}
</script>

<template>
    <!--Footer container-->
    <footer class="flex flex-col items-center w-full text-center text-white bg-neutral-900">
        <div class="px-6 pt-6 ">
            <div class="flex justify-center mb-6">
                <a v-for="(link, platform) in socialMediaLinks" :key="platform" :href="link" type="button"
                    class="m-2 text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    data-te-ripple-init data-te-ripple-color="light">
                    <component :is="getSocialMediaIcon(platform)" class="m-1 text-gray-500 dark:text-gray-100" />
                </a>
            </div>
        </div>

        <!--Copyright section-->
        <div class="w-full p-4 text-center" style="background-color: rgba(0, 0, 0, 0.2)">
            © 2023 Copyright:
            <a class="text-whitehite" href="https://charleswahome.me">Charles Wahome</a>
        </div>
    </footer>
</template>
