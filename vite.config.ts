import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/Navbar/index.tsx"),
      name: "alexodan-navbar",
      fileName: (format) => `navbar.${format}.js`,
    },
  },
  plugins: [react(), dts()],
});
