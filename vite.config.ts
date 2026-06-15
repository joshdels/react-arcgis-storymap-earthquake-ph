import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },

  optimizeDeps: {
    include: [
      "@arcgis/core",
      "@arcgis/map-components",
      "@esri/calcite-components",
    ],
  },

  build: {
    outDir: "dist",
  },
});
