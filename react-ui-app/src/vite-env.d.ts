interface ImportMeta {
    readonly env: ImportMetaEnv
}

interface ViteTypeOptions {
    strictImportMetaEnv: ImportMetaEnv
}

interface ImportMetaEnv {
    /* 网站title */
    readonly VITE_APP_TITLE?: string
    /* 开发服务器端口 */
    readonly VITE_DEV_SERVER_PORT?: number
    /* 后端api base url */
    readonly VITE_HUBBO_API_BASEURL?: string
    /* 是否自动打开浏览器 */
    readonly VITE_AUTO_OPEN?: boolean
    /* 静态资源路径 */
    readonly VITE_BASE_PATH?: string
    /* 请求超时时间 */
    readonly VITE_REQUEST_TIMEOUT?: number
    /* 应用访问来源token */
    readonly VITE_APP_ACCESS_ORIGIN_TOKEN?: string
}