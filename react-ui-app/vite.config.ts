import {type ConfigEnv, defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://cn.vitejs.dev
export default defineConfig((configEnv: ConfigEnv) => {
    const {mode} = configEnv
    const env = loadEnv(mode, process.cwd(), '')
    return {
        base: env.VITE_BASE_PATH || '/',
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV)
        },
        plugins: [
            react({
                babel: {
                    plugins: [['babel-plugin-react-compiler']],
                },
            }),
        ],
        server: {
            port: env.VITE_DEV_SERVER_PORT ? Number(env.VITE_DEV_SERVER_PORT) : 5173,
            proxy: {
                '/api': {
                    // target: 'http://localhost:8080',
                    target: 'https://www.baidu.com',
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            }
        },
        dev: {
            sourcemap: true
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                '#': resolve(__dirname, './src/types'),
            }
        }
    }
})