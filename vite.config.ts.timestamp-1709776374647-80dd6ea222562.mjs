// vite.config.ts
import { defineConfig } from "file:///C:/Users/solihin/Cocomarket-FE/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/solihin/Cocomarket-FE/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///C:/Users/solihin/Cocomarket-FE/node_modules/unocss/dist/vite.mjs";
var vite_config_default = defineConfig({
  build: {
    outDir: "www"
  },
  server: {
    host: "0.0.0.0",
    // Replace with your actual IP address
    port: 3001
    // Replace with your desired port number
  },
  plugins: [
    UnoCSS({
      configFile: "./unocss.config.js"
    }),
    vue()
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzb2xpaGluXFxcXENvY29tYXJrZXQtRkVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHNvbGloaW5cXFxcQ29jb21hcmtldC1GRVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvc29saWhpbi9Db2NvbWFya2V0LUZFL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBVbm9DU1MgZnJvbSBcInVub2Nzcy92aXRlXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IFwid3d3XCIsXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLCAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgSVAgYWRkcmVzc1xyXG4gICAgcG9ydDogMzAwMSwgLy8gUmVwbGFjZSB3aXRoIHlvdXIgZGVzaXJlZCBwb3J0IG51bWJlclxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgVW5vQ1NTKHtcclxuICAgICAgY29uZmlnRmlsZTogXCIuL3Vub2Nzcy5jb25maWcuanNcIixcclxuICAgIH0pLFxyXG4gICAgdnVlKCksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogXCIvc3JjXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9SLFNBQVMsb0JBQW9CO0FBQ2pULE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFHbkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
