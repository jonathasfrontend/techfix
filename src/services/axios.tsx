import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3000/content/v1'
    baseURL: 'https://servertechfixfr.vercel.app/content/v1'
})

export default api