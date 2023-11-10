/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
     alias: {
       "@": path.resolve("src/")
     }
  },
  test: {
    css: true,
    setupFiles: ["./src/test-setup.ts"],
    environment: "jsdom"
  },
});
