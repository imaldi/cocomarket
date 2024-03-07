import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "www",
  },
  server: {
    host: "0.0.0.0", // Replace with your actual IP address
    port: 3001, // Replace with your desired port number
  },
  plugins: [
    UnoCSS({
      configFile: "./unocss.config.js",
    }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
