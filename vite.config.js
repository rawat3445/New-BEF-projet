import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: [
      'framer-motion',
      '@mui/material/Button',
      '@mui/lab/Timeline'
    ]
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
});
