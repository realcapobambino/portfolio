import { User } from "@/App/Common/Types/User"


export const state = {
    user: <User>JSON.parse(localStorage.getItem('user') || '{}'),

}