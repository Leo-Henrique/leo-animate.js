import { defineConfig } from "vite";

export default defineConfig({
    base: `/leo-animate.js`,
    server: {
        fs: { allow: [".."] },
    },
});
