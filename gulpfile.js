"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const browserSyncSpa = require("browser-sync-middleware-spa");
const path = require("path");

gulp.task("serve", () => {
	browserSync.init({
		port: 8001,
		server: {
			baseDir: "src",
			routes: {
				"/bower_components": "bower_components"
			}
		},
		files: "src/**/*",
		middleware: browserSyncSpa(/^[^.]*$/,
			path.join(__dirname, "src", "index.html"))
	});
});

gulp.task("default", ["serve"]);
