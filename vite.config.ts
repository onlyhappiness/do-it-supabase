import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@api", replacement: "/src/api" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@client", replacement: "/src/client" },
      { find: "@components", replacement: "/src/components" },
      { find: "@data", replacement: "/src/data" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@mock", replacement: "/src/mock" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@interfaces", replacement: "/src/interfaces" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@", replacement: "/src" },
    ],
  },
  define: {
    VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
  },
});
