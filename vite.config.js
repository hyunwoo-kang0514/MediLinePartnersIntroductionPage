import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/mediLinePartners/', // GitHub Pages용 설정 - Netlify에서는 제거
})
