import { defineConfig } from "vite";

export default defineConfig({
    root: "demo",
    publicDir: false,
    build: {
        outDir: "../dist",
        emptyOutDir: "true",
        lib: {
            entry: {
                leoAnimate: "../lib/leoAnimate.js",
            },
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === "style.css")
                        return "leo-animate.css";
                    else return assetInfo.name;
                },
                entryFileNames: "leo-animate.js",
            },
        },
    },
});
