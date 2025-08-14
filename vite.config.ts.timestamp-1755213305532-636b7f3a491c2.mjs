// vite.config.ts
import { defineConfig } from "file:///C:/Users/Lucas/Desktop/plataforma/pine/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Lucas/Desktop/plataforma/pine/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///C:/Users/Lucas/Desktop/plataforma/pine/node_modules/vite-plugin-dts/dist/index.mjs";
import * as path from "path";
import { libInjectCss } from "file:///C:/Users/Lucas/Desktop/plataforma/pine/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Lucas\\Desktop\\plataforma\\pine";
var vite_config_default = defineConfig({
  plugins: [vue(), dts(), libInjectCss()],
  server: {
    port: 8080
  },
  resolve: {
    alias: { "@": path.resolve(__vite_injected_original_dirname, "./src") }
  },
  base: "/pine/",
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: path.resolve(__vite_injected_original_dirname, "src/package/index.ts"),
      name: "pine",
      // the name of the output files when the build is run
      fileName: "pine"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMdWNhc1xcXFxEZXNrdG9wXFxcXHBsYXRhZm9ybWFcXFxccGluZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTHVjYXNcXFxcRGVza3RvcFxcXFxwbGF0YWZvcm1hXFxcXHBpbmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0x1Y2FzL0Rlc2t0b3AvcGxhdGFmb3JtYS9waW5lL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzc1wiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbdnVlKCksIGR0cygpLCBsaWJJbmplY3RDc3MoKV0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHsgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIikgfSxcclxuICB9LFxyXG4gIGJhc2U6IFwiL3BpbmUvXCIsXHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICAvLyBzcmMvaW5kZXh0LnRzIGlzIHdoZXJlIHdlIGhhdmUgZXhwb3J0ZWQgdGhlIGNvbXBvbmVudChzKVxyXG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvcGFja2FnZS9pbmRleC50c1wiKSxcclxuICAgICAgbmFtZTogXCJwaW5lXCIsXHJcbiAgICAgIC8vIHRoZSBuYW1lIG9mIHRoZSBvdXRwdXQgZmlsZXMgd2hlbiB0aGUgYnVpbGQgaXMgcnVuXHJcbiAgICAgIGZpbGVOYW1lOiBcInBpbmVcIixcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcclxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnlcclxuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgLy8gUHJvdmlkZSBnbG9iYWwgdmFyaWFibGVzIHRvIHVzZSBpbiB0aGUgVU1EIGJ1aWxkXHJcbiAgICAgICAgLy8gZm9yIGV4dGVybmFsaXplZCBkZXBzXHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdULFNBQVMsb0JBQW9CO0FBQzdVLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFDaEIsWUFBWSxVQUFVO0FBQ3RCLFNBQVMsb0JBQW9CO0FBSjdCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLGFBQWEsQ0FBQztBQUFBLEVBQ3RDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPLEVBQUUsS0FBVSxhQUFRLGtDQUFXLE9BQU8sRUFBRTtBQUFBLEVBQ2pEO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQVksYUFBUSxrQ0FBVyxzQkFBc0I7QUFBQSxNQUNyRCxNQUFNO0FBQUE7QUFBQSxNQUVOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQTtBQUFBLE1BR2IsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUE7QUFBQTtBQUFBLFFBR04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
