import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" = percorsi relativi: funziona su GitHub Pages sia in /nomerepo/ sia su dominio proprio
export default defineConfig({ plugins: [react()], base: "./" });
