// vite.config.js

export default {
	root: "./src",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				index: "./src/index.html",
				about: "./src/about.html",
				article: "./src/blog/index.html",
			},
		},
	},
	optimizeDeps: {
		entries: [],
	},
};
