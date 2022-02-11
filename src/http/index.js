import axios from "axios";

const SERVER_URL = "https://dispex.org/api/vtest";

export const $api = axios.create({
    // withCredentials: false,
    baseURL:SERVER_URL
})