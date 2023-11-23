import { ref } from "vue";

export function forceLoader() {
    let loading = ref(true);

    function setLoadingToFalse() {
        loading.value = false; // Update the existing loading variable
    }

    setTimeout(setLoadingToFalse, 3000); // 3000 milliseconds (3 seconds)

    return { loading };
}
