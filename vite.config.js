import { defineConfig } from "vite";
const packageName = "leoAnimate";

export default defineConfig({
    root: "demo",
    build: {
        outDir: "../dist",
        emptyOutDir: "true",
        lib: {
            entry: {
                leoAnimate: `../lib/${packageName}.js`,
            },
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === "style.css")
                        return `${packageName}.css`;
                    else return assetInfo.name;
                },
            },
        },
    },
});
