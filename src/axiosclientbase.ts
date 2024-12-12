import axios from "axios";
import {baseURL} from "@/constants.ts";

export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    }
})
