const path = require('path')
import {defineConfig} from 'vite'
import {babel} from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import ts2 from 'rollup-plugin-typescript2';

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        commonjs(),
        {
            ...ts2({
                check: true,
                tsconfig: path.resolve(__dirname, 'tsconfig.json'), // your tsconfig.json path
                tsconfigOverride: {
                    compilerOptions: {
                        sourceMap: false,
                        declaration: true,
                        declarationMap: false
                    },
                    exclude: ['examples','UI']
                }
            }),
            enforce: 'pre'
        },
        babel({
            exclude: 'node_modules/**', // 只编译源代码
            extensions: ['.ts'],
            babelHelpers: 'runtime'
        }),],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'packages/index.ts'),
            name: 'easiIamSdkJs',
            fileName: 'index',
            formats: ['umd']
        },
        cssCodeSplit: true,
        rollupOptions: {
            external: ['axios'],
            output: {
                exports: 'auto',
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    axios: 'axios',
                },
                entryFileNames: 'index.js',
                format: 'umd',
                name: 'easiIamSdkJs',
            }
        }
    }
})
