import { defineConfig } from 'astro/config';
import vitePluginGlsl from "vite-plugin-glsl"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [vitePluginGlsl()]
  }
});
