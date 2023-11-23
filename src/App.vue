<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()

</script>

<template>
  <Suspense>
    <router-view v-slot="{ Component }" :key="route.path">
      <Transition name="fade" tag="component" class="wrapper" mode="out-in">
        <component :is="Component" class="wrapper" />
      </Transition>
    </router-view>
    <template #fallback>
      <div>
        <h1>Loading...</h1>
      </div>
    </template>
  </Suspense>
</template>



<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.wrapper {
  height: 100%;
}
</style>