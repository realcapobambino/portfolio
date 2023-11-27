<script setup>
import MainLayout from "../../../Common/Components/Layouts/MainLayout.vue"
import LandingPage from "../Components/LandingPage.vue"
import AboutMe from "../Components/AboutMe.vue"

</script>

<!--  -->
<template>
    <MainLayout>
        <template v-slot:default>
            <LandingPage></LandingPage>
            <AboutMe></AboutMe>

        </template>

    </MainLayout>
</template>


<style scoped></style>z