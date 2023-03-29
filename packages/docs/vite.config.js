/// <reference types="vite/client" />

// antes de rodar dev: $env:NODE_OPTIONS = "--openssl-legacy-provider"

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})
