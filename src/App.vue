<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()

</script>

<template>
  <router-view v-slot="{ Component }" :key="route.path">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>



<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>