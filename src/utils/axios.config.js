import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://phonebook-api-au1f.onrender.com/api",
})