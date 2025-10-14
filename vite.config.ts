import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// ⚙️ usamos uma função async para permitir o uso de await
export default defineConfig(async () => {
  const plugins = [react(), runtimeErrorOverlay()];

  // adiciona plugins do Replit apenas em ambiente de desenvolvimento do Replit
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    const { devBanner } = await import("@replit/vite-plugin-dev-banner");
    plugins.push(cartographer(), devBanner());
  }

  return {
    // ✅ se for domínio próprio ou Render, use "/"
    // se for GitHub Pages, troque para "/NomeDoRepositorio/"
    base: "/",

    plugins,

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    // 📂 define a pasta raiz do projeto React
    root: path.resolve(import.meta.dirname, "client"),

    build: {
  outDir: path.resolve(import.meta.dirname, "dist", "public"),
  emptyOutDir: true,
  assetsDir: "assets",
  rollupOptions: {
    output: {
      assetFileNames: "assets/[name].[hash].[ext]",
    },
  },