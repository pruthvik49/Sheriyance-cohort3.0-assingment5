import axios from "axios";

export const axiosInstent = axios.create({
    baseURL : "https://fakestoreapi.com"

})
axiosInstent.interceptors.response.use(
        (response)=>{
        return response
        
    },
        (error)=>{
        return Promise.reject(error)
     }
)