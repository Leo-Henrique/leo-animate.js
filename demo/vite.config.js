import { defineConfig } from "vite";

export default defineConfig({
    base: `/leoAnimate.js`,
    server: {
        fs: { allow: [".."] },
    },
});
