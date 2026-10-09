import { sveltekit } from "@sveltejs/kit/vite";
import staticAdapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: vitePreprocess(),
      adapter: staticAdapter(),
      paths: { base: "/rmnz" },
    }),
    tailwindcss(),
  ],
});
