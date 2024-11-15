import { HEADER } from "@constants/api.enum";
import { USER_LOGIN_URL } from "@constants/url.enum";
import { APIResponse } from "@models/base.model";
import axios from "@plugins/axios/axios";
import { AxiosResponse } from "axios";


export function login<T extends APIResponse>(username: string, password: string): Promise<AxiosResponse<T>> {
    return axios.post<T>(USER_LOGIN_URL, { username, password }, {
        headers: { [HEADER.MOCK_URL]: USER_LOGIN_URL }
    })
}