
<template>
    <div class="container mx-auto mt-8">
        <h2 class="mb-6 text-3xl font-bold text-center font-RussoOne dark-mode-text">About Me</h2>
        <div class="flex justify-center">
            <div class="">
                <img src="@/assets/images/my-photo.jpg" alt="photo"
                    class="w-[200px] h-[200px] overflow-hidden border-4 border-white rounded-full">
            </div>
        </div>
        <div class="mt-8 lg:flex">
            <div class="mt-6 lg:w-1/2 lg:pr-4 lg:mt-0">
                <h3 class="text-xl font-bold dark-mode-text">Who am I ?</h3>
                <div class="dark-mode-text">
                    <p class="p-2 mt-4">
                        I'm Charles Wahome, a passionate full-stack developer with a flair for turning
                        lines of code into impactful digital experiences. Here's a glimpse into what makes me tick:
                        <br>
                        <br>
                        🚀 Mission: Craft Digital Excellence
                        <br>
                        My journey in the tech realm is fueled by a commitment to crafting digital solutions that
                        not only meet expectations but exceed them. From conceptualization to deployment, I bring a
                        blend of creativity and precision to every project.
                        <br>
                        <br>
                        💻 Tech Enthusiast & Penetration Tester
                        <br>
                        Beyond coding, I'm a tech enthusiast who finds joy in exploring the latest innovations. I'm
                        particularly fascinated by the world of penetration testing, where I delve into the
                        intricacies of security to ensure robust and reliable systems.
                    </p>
                </div>
            </div>
            <div class="mt-6 lg:w-1/2 lg:pl-4 lg:mt-0">
                <div class="dark-mode-text">
                    <h3 class="text-xl font-bold">Contact Info: </h3>
                    <div class="p-2 m-2">
                        <strong>E-mail:</strong> charleswkariuki007@gmail.com
                    </div>
                    <div class="p-2 m-2">
                        <strong>Phone:</strong> +254 798 384 604
                    </div>
                    <div class="p-2 m-2">
                        <strong>City:</strong> Nairobi, Kenya
                    </div>
                    <div class="p-2 m-2">
                        <strong>Languages:</strong> English, Swahili, German, Japanese
                    </div>
                    <div class="social-wrap">
                        <div class="px-6 pt-6 ">
                            <div class="flex justify-start mb-6">
                                <a v-for="(link, platform) in socialMediaLinks" :key="platform" :href="link" type="button"
                                    class="m-2 text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    <component :is="getSocialMediaIcon(platform)"
                                        class="m-1 text-gray-500 dark:text-gray-100" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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

<style scoped></style>