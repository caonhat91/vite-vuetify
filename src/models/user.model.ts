import { APIResponse } from "./base.model"

export type User = {
    jwt: string
}

export interface LoginResponse extends APIResponse<User> { }