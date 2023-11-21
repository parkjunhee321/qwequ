import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points.
        entry: resolve(__dirname, "src/App.tsx"),
        name: "core",
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
          "@mui/icons-material",
          "@mui/material",
          "@emotion/react",
          "@emotion/styled",
        ],
      },
    },
  };
});
