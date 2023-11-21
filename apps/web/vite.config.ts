import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";
import path, { resolve } from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  return {
    plugins: [
      dts({
        outDir: "./dist",
      }),
    ],
    build: {
      outDir: "./dist",
      lib: {
        // Could also be a dictionary or array of multiple entry points.
        entry: resolve(__dirname, "src/App.tsx"),
        name: "@admin/core",
        fileName: "App",
        // Change this to the formats you want to support.
        // Don't forgot to update your package.json as well.
        formats: ["es", "cjs"],
      },
      rollupOptions: {
        // External packages that should not be bundled into your library.
        external: [
          "react",
          "react-dom",
          "react-router-dom",
          "react/jsx-runtime",
        ],
      },
    },
  };
});
