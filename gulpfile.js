"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("serve", () => {
	browserSync.init({
		port: 8001,
		server: {
			baseDir: "src",
			routes: {
				"/bower_components": "bower_components"
			}
		},
		files: "src/**/*"
	});
});

gulp.task("default", ["serve"]);
