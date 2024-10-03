import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: 'build',
        lib: {
            entry: 'src/elements/single-reaction.ts',
            name: 'single-reaction',
            formats: ['es'],
        },
        manifest: true,
        minify: false,
        reportCompressedSize: true
    }
});