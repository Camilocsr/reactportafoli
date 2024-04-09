import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  base: "/reactportafoli/",
  server: {
    port: 9999
  },
  build: {
    assetsDir: "images",
    assetsInclude: ["**/*.glb"]
  }
});