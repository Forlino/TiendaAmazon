import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TiendaAmazon/',  // Especifica el nombre del repositorio donde se alojará el proyecto
  plugins: [react()],
})
