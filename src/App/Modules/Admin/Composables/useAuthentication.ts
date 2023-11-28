import { reactive } from "vue";

import { AuthenticateAdmin } from "../Types/AuthenticateAdmin";
import { FormError } from "@/App/Common/Types/FormError";
import { useRouter } from "vue-router";
import { useStore } from "@/store/store";
import { MutationTypes } from "@/store/mutation-types";


export function useAuthentication() {
    //     
    // Authentication Data from the form
    // 
    const authenticationData = reactive({
        loginData: <AuthenticateAdmin>{},
        formError: <FormError>{},
        loading: <boolean>false,
        status: <number>0,
    })

    const store = useStore()
    const router = useRouter()

    // 
    // get the current authenticated user
    // 
    const getAuthenticatedUser = async () => {
        // authenticationData.loading = true
        const { status, data } = await useFetch(`user/me`)
        // authenticationData.loading = false
        authenticationData.status = status.value
        if (status.valie === 200) {
            store.commit(MutationTypes.SET_USER, data.value.data)
        }
    }

}
