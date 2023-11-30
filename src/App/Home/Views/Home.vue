<script setup>
import MainLayout from "@/App/Components/Layouts/MainLayout.vue"
import LandingPage from "../Components/LandingPage.vue"
import AboutMe from "../Components/AboutMe.vue"
import SkillsSection from "../Components/SkillsSection.vue";

</script>

<!--  -->
<template>
    <MainLayout>
        <template v-slot:default class="">
            <LandingPage class=""></LandingPage>
            <AboutMe class=""></AboutMe>
            <!-- <SkillsSection></SkillsSection> -->

        </template>

    </MainLayout>
</template>


<style scoped></style>z