<script setup>
useSupabaseAuthClient()
const email = ref("")
const password = ref(null)
const errorMsg = ref(null)
const successMsg = ref(null)

async function signUp() {
    try {
        const { date, error } = await client.auth.signUp({
            email: email.value,
            password: password.value
        })
        if (error) throw error
        successMsg.value = "Check your email for confirmation"
    } catch (error) {
        errorMsg.value = error.message
    }
}

</script>

<template>
    <div class="bg-white dark:bg-gray-700 font-family-karla h-screen">

        <div class="w-full flex flex-wrap">

            <!-- Login Section -->
            <div class="w-full md:w-1/2 flex flex-col dark:bg-dark">
                <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p class="text-center text-3xl dark:text-gray-50">Welcome</p>
                    <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                        <div class="flex flex-col pt-4">
                            <label for="email" class="text-lg dark:text-gray-50">Email</label>
                            <input type="email" id="email" placeholder="your@email.com"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-50">
                        </div>

                        <div class="flex flex-col pt-4">
                            <label for="password" class="text-lg">Password</label>
                            <input type="password" id="password" placeholder="Password"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-50">
                        </div>

                        <input type="submit" value="Log In"
                            class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" @click="signUp()">
                    </form>
                    div

                </div>

            </div>

            <!-- Image Section -->
            <div class="w-1/2 shadow-2xl">
                <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0">
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>