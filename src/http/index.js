import axios from "axios";

const SERVER_URL = "https://dispex.org/api/vtest-";

export const $api = axios.create({
    // method: 'HEAD',
    // mode: 'no-cors',
    // headers:{
    //     'Access-Control-Allow-Origin': '*',},
    // withCredentials: false,
    baseURL:SERVER_URL
})