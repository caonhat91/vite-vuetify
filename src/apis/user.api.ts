import { USER_LOGIN_URL } from "@constants/url.enum";
import axios from "@plugins/axios/axios";
import { AxiosResponse } from "axios";


export function login<T>(username: string, password: string): Promise<AxiosResponse<T>> {
    return axios.post<T>(USER_LOGIN_URL, { username, password })
}