/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    css: true,
    setupFiles: ["./src/test-setup.ts"],
    environment: "jsdom"
  },
});
