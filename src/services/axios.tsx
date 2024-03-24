import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_URL_GET_ODERS
})

export default api