import { reactive } from "vue";

import { AuthenticateAdmin } from "../Types/AuthenticateAdmin";
import { FormError } from "@/App/Common/Types/FormError";
import { useRouter } from "vue-router";
import { useStore } from "@/store/store";


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

    }

}
