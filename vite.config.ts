import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(async () => {
  const { componentTagger } = await import('lovable-tagger')

  return {
    plugins: [
      react(),
      componentTagger()
    ],
    server: {
      port: 5173
    }
  }
})
