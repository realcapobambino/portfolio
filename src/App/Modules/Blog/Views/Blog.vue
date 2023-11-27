<template>
    <MainLayout>
        <div class="container mx-auto">
            <br />
            <h1>Blog Goes Here</h1>

            <ul>
                <li v-for="post in posts" :key="post.id"> {{ post.post_title }} - {{ post.post_author }}</li>
            </ul>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/App/Common/Components/Layouts/MainLayout.vue"
import { ref, onMounted } from 'vue'
import { supabase } from "@/lib/SupabaseClient"

const posts = ref([])



async function getPosts() {
    const { data } = await supabase.from('posts').select()
    posts.value = data
}


onMounted(() => {
    getPosts()
    console.log(posts)
})


</script>

<style scoped></style>


<!-- 
<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const countries = ref([])

async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
}

onMounted(() => {
    getCountries()
})
</script>

<template>
    <ul>
        <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
</template> -->