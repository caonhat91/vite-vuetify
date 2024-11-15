export type APIResponse<T = any> = {
    code: number,
    message: null | string,
    result: T
}