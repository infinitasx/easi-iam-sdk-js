const path = require('path')
import {defineConfig} from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'packages/index.ts'),
            name: 'easiIamSdkJs'
        },
        rollupOptions: {
            external: ['vue', "ant-design-vue", "ant-design-vue/dist/antd.css", 'axios','oidc-client'],
        }
    }
})
