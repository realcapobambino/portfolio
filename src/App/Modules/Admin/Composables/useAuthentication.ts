import { reactive } from "vue";

import { AuthenticateAdmin } from "../Types/AuthenticateAdmin";
import { FormError } from "@/App/Common/Types/FormError";


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
}
