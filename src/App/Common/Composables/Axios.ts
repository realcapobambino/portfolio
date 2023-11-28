import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import swal from 'sweetalert';
import { useStore } from "@/store/store";
const store = useStore();

const $axios = Axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
});

// Add a request interceptor
$axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // Do something before request is sent
        // @ts-ignore
        config.headers['authorization'] = `Bearer ${store.state.token}`;
        return config;
    },
    (error: AxiosError) => {
        //
        swal('Whoops! could not send the request :(', 'Kindly check your connection', 'error')
            .then();
        return Promise.reject(error);
    },
);

// Add a response interceptor
$axios.interceptors.response.use(
    // Do something with response data
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        // Do something with response error
        if (!error.response) {
            swal('Network Error :(', 'Could not reach the server.', 'error')
                .then();
            return Promise.reject(error);
        }
        // check the response codes
        switch (error.response.status) {
            case 401:
                // TODO: Logout
                return Promise.reject(error);
            case 403:
                swal(error.response.data.message, '', 'error')
                    .then();
                return Promise.reject(error);
            case 500:
                swal('Server Error :(', 'Kindly contact your web master', 'error')
                    .then();
                return Promise.reject(error);
            case 422:
            case 417:
                break;
            case 400:
                break;
            default:
                swal('Error :(', 'Kindly contact your web master', 'error')
                    .then();
        }
        return Promise.reject(error);
    },
);

/**
 * Export axios.
 */
export default $axios;
