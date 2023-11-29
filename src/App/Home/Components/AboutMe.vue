<!-- AboutMe.vue -->
<template>
    <div class="h-auto max-w-full bg-fixed bg-center bg-cover" id="about">
        <!-- Section: Design Block -->
        <section class="mb-32">
            <!-- Jumbotron -->
            <div class="mx-auto my-24 lg:container md:px-6">
                <div class="flex flex-wrap items-center justify-center gap-2 lg:grid lg:grid-cols-2 ">
                    <div class="relative block z-4">
                        <img src="@/assets/images/my-photo.jpg"
                            class="h-auto max-w-full mx-auto duration-200 ease-in-out rounded-full shadow-lg xs:w-1/3 lg:rounded-2xl lg:w-full dark:shadow-black/20 hover:scale-105"
                            alt="Charles Wahome" />
                    </div>
                    <div class="mb-12 duration-200 ease-in-out lg:mb-0 ">
                        <div
                            class="relative z-[1] block rounded-2xl bg-[rgba(0, 0, 0, 0)] px-4 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[rgba(0, 0, 0, 0)] dark:shadow-black/20 md:px-12 lg:-ml-16 sm:-mt-10">
                            <h2 class="mb-8 text-3xl font-bold text-neutral-500 dark:text-neutral-300">Charles Kariuki
                                Wahome
                            </h2>
                            <h4 class="pb-2 mb-8 font-semibold text-neutral-500 dark:text-neutral-300 lg:pb-0">
                                Full Stack Developer
                            </h4>
                            <p class="mb-2 text-neutral-500 dark:text-neutral-300">
                                Welcome to my digital playground! As a passionate full-stack developer, I navigate the
                                ever-evolving landscape of technology with an unwavering commitment to crafting seamless,
                                scalable, and innovative solutions. With a keen eye for detail and a love for
                                problem-solving, I thrive on turning complex challenges into elegant code. My journey in the
                                realm of web development is a testament to my dedication to building not just functional,
                                but truly exceptional digital experiences. Let's embark on this coding adventure together,
                                where creativity meets functionality, and every line of code tells a story.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <!-- Section: Design Block -->
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@media (min-width: 992px) {
    .rotate-lg-6 {
        transform: rotate(6deg);
    }
}

/* Add a fancy border to the image */
.fancy-border-radius {
    border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;
}
</style>