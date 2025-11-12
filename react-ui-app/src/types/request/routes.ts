export declare interface RouteMeta {
    readonly requiresAuth: boolean
    readonly title: string | undefined
    readonly icon: string | undefined
    readonly keepAlive: boolean
    // 是否需要上报页面的操作行为
    readonly needReport: boolean
}

export declare interface Route {
    readonly path: string
    readonly component: string
    readonly meta: RouteMeta
    children?: Route[]
}
