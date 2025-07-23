import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { URL, fileURLToPath } from "node:url"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      // 设置根路径别名
      '~': fileURLToPath(new URL('./', import.meta.url)),
      // 设置src别名
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 8889,
    open: true,
    host: true,
  }
})
