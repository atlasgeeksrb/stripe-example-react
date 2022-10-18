import axios from "axios";

// define an interceptor for the response
// pass handler functions as parameters- 
// first param is success handler, second is error handler
axios.interceptors.response.use(axiosResponse => {
    // if we handle the response, we have to manually return it
    return axiosResponse;
}, axiosError => {
    const expectedResponse = 
        axiosError.response && 
        axiosError.response.status >=200 &&
        axiosError.response.status < 300;
    if(axiosError.response && !expectedResponse) {
        // const resp = axiosError.response;
        // if(resp.status === 401) {
        // }
        // if we handle the error, we have to manually reject/return it
        return Promise.reject(axiosError);
    }
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}