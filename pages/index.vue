<template>
    <div>

        <div class="min-h-screen md:container md:mx-auto">

            <section class="flex flex-col items-center mt-10 mb-5 sm:justify-between sm:flex-row sm:mt-10 sm:mb-8">
                <div class="w-full text-left md:w-1/3">
                    <h1
                        class="text-4xl text-center font-raleway font-general-semibold md:text-5xl xl:text-6xl sm:text-left text-ternary-dark dark:text-primary-light">
                        Hello there, I am Charles
                    </h1>
                    <VueWriter
                        class="mt-2 text-2xl leading-none text-center text-gray-400 font-raleway sm:text-xl xl:text-2xl sm:text-left"
                        :array="['Full-Stack Developer', 'Linux Enthusiast', 'Gaming Enthusiast']" />
                    <!-- <p
                        class="mt-2 text-lg leading-none text-center text-gray-400 font-general-medium sm:text-xl xl:text-2xl sm:text-left">
                        A Full-Stack Web Developer &amp; Gaming Enthusiast
                    </p> -->
                    <!-- <div class="flex justify-center sm:block">
                            <a download="Stoman-Resume.pdf" href="/files/cv.pdf"
                                class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                                aria-label="Download Resume"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="w-5 ml-0 mr-2 duration-100 feather feather-arrow-down-circle sm:ml-1 sm:mr-3 sm:w-6">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="8 12 12 16 16 12"></polyline>
                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                </svg><span class="text-sm duration-100 sm:text-lg font-general-medium">Download
                                    CV</span></a>
                        </div> -->
                </div>
                <div class="float-right w-full text-right md:w-1/2">
                    <img src="/img/dev.svg" alt="Developer" />
                </div>
            </section>

        </div>
    </div>
</template>

<script setup>
import VueWriter from 'vue-writer'
</script>
