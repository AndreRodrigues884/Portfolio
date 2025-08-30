import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Portfolio/', // Nome do repositório
  plugins: [vue()],
})
