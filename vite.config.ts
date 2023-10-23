import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "src/data"),
      // "@images": path.resolve(__dirname, "src/data/images"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@style": path.resolve(__dirname, "src/style"),
    },
  },
});
