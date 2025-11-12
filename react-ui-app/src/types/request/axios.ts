import type {
    AxiosResponseHeaders,
    InternalAxiosRequestConfig,
    RawAxiosResponseHeaders,
} from 'axios'

declare interface ResponseData<T = {} | any[] | undefined | null | number> {
    readonly code: number
    readonly msg?: string
    readonly data: T
    isSuccess: () => boolean
}

declare interface AxiosResponseData<T, H = {}, D = any>
    extends ResponseData<T> {
    /* 系统响应状态码  */
    readonly code: number

    /* 系统响应状态描述 */
    readonly msg: string

    /* 系统响应数据 */
    readonly data: T

    /* http应状态码 */
    sourceStatus?: number

    /* http响应状态描述 */
    sourceStatusText?: string

    /* http响应头 */
    headers?: (H & RawAxiosResponseHeaders) | AxiosResponseHeaders

    /* http请求配置 */
    config?: InternalAxiosRequestConfig<D>

    /* 是否成功 */
    isSuccess: () => boolean
}

export { type AxiosResponseData }
