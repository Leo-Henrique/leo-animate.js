import { defineConfig } from "vite";
const packageName = "leoAnimate";

export default defineConfig({
    root: "demo",
    base: `/${packageName}.js`,
    build: {
        outDir: "../dist",
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === "style.css")
                        return `${packageName}.css`;
                    else return assetInfo.name;
                },
            },
        },
        lib: {
            entry: {
                leoAnimate: `../lib/${packageName}.js`,
            },
            formats: ["es"],
        },
    },
});
