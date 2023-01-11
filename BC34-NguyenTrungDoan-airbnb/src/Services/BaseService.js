import axios from "axios";
import { DOMAIN_BE } from "../utils/constant";

export class baseService {

    put = (url,model) =>{
        return axios({
           url:`${DOMAIN_BE}/${url}`,
           method: 'PUT',
           data: model,
           headers: {'tokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjY0MDAwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzg3NjAwfQ.G8iD6xMe_vpUPqae0-KeRwiYiBEoJOouW3WHO2HaNe4"}
        })
    }

    post = (url,model) =>{
        return axios({
           url:`${DOMAIN_BE}/${url}`,
           method: 'POST',
           data: model,
           headers: {'tokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjY0MDAwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzg3NjAwfQ.G8iD6xMe_vpUPqae0-KeRwiYiBEoJOouW3WHO2HaNe4"}
        })
    }

    get = (url) =>{
        return axios({
           url:`${DOMAIN_BE}/${url}`,
           method: 'GET',
           headers: {'tokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjY0MDAwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzg3NjAwfQ.G8iD6xMe_vpUPqae0-KeRwiYiBEoJOouW3WHO2HaNe4"}
        })
    }

    delete = (url) =>{
        return axios({
           url:`${DOMAIN_BE}/${url}`,
           method: 'DELETE',
           headers: {'tokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjY0MDAwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzg3NjAwfQ.G8iD6xMe_vpUPqae0-KeRwiYiBEoJOouW3WHO2HaNe4"}
        })
    }

}