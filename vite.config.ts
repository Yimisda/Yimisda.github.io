import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  // Use relative base for GitHub Pages stability across user/project sites
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Output to docs folder for GitHub Pages (alternative to gh-pages branch)
    // outDir: "docs",

    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          "vendor-react": ["react", "react-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-katex": ["katex", "react-katex"],
          "vendor-ui": [
            "@radix-ui/react-tabs",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-slot",
          ],
        },
      },
    },

    // Minification options
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
    },
  },

  // Development server options
  server: {
    port: 5173,
    host: true,
  },
})
