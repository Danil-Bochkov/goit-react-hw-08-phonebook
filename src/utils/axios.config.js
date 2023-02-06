import axios from "axios";

const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
    baseURL: "https://phonebook-api-lfwy.onrender.com/api",
    headers: {Authorization: `Bearer ${token}`}
})