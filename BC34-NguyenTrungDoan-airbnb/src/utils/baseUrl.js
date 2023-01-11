import axios from "axios";
import { getStringLocal } from "./config";
import { DOMAIN_BE, USER_LOGIN } from "./constant";

export const http = axios.create({
    baseURL: DOMAIN_BE,
    timeout: 6000
})

// interceptor => can thiệp một hàm middleware vào request và response khi gọi api
http.interceptors.request.use((config) => {
    const Token = getStringLocal(USER_LOGIN);
    
    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${Token}`,
            tokenCybersoft:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjY0MDAwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzg3NjAwfQ.G8iD6xMe_vpUPqae0-KeRwiYiBEoJOouW3WHO2HaNe4"
        }
    }
}, err => { console.log(err) })