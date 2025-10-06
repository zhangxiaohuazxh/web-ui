import axiosStatic, {type AxiosInstance, type AxiosRequestConfig} from 'axios'
import {type AxiosResponseData} from '#/request/axios.ts'


/* 减少对这个axios的直接使用,使用封装的request函数 */
export const axios: AxiosInstance = axiosStatic.create({
    baseURL: import.meta.env!.VITE_BASE_PATH ?? 'http://localhost:8080',
    timeout: import.meta.env!.VITE_REQUEST_TIMEOUT ?? 10000,
    allowAbsoluteUrls: true,
    headers: {
        "X-App-Origin-Access-Token": import.meta.env!.VITE_APP_ACCESS_ORIGIN_TOKEN ?? "hubbo-web"
    }
})

export async function request<T>(config: AxiosRequestConfig): Promise<AxiosResponseData<T>> {
    const requestConfig: AxiosRequestConfig = {...config}
    if (requestConfig.method === "GET") {
        let url: string = requestConfig.url as string;
        // 防止浏览器的缓存
        if (!url?.includes("timestamp")) {
            url += (url.includes("?") ? "&" : "?") + "timestamp=" + Date.now();
            requestConfig.url = url;
        }
    }
    return new Promise((resolve, reject) => {
        axios.request(requestConfig).then(response => {
            const resp: AxiosResponseData<T> = {
                ...response,
                code: response.data!.code,
                msg: response!.data.msg,
                data: response.data!.data as T,
                isSuccess(): boolean {
                    return this.code === 200;
                }
            }
            resolve(resp)
        }).catch(error => reject(error))
    })
}

export async function get<T>(url: string): Promise<AxiosResponseData<T>> {
    return request({
        url,
        method: 'GET',
    })
}

export async function post<T, D = {}>(url: string, data: D): Promise<AxiosResponseData<T>> {
    return request({
        url,
        method: 'POST',
        data,
    })
}

export async function del<T>(url: string): Promise<AxiosResponseData<T>> {
    return request({
        url,
        method: 'DELETE',
    })
}

export async function put<T, D = {}>(url: string, data: D): Promise<AxiosResponseData<T>> {
    return request({
        url,
        method: 'PUT',
        data,
    })
}

export async function patch<T, D = {}>(url: string, data: D): Promise<AxiosResponseData<T>> {
    return request({
        url,
        method: 'PATCH',
        data,
    })
}

