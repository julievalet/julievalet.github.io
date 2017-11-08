var gulp = require("gulp");
var gutil = require("gulp-util");
var autoprefixer = require('gulp-autoprefixer');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");


// Manage prefix for all navigators
// 'styles' is the name of the task
gulp.task('styles', function() {
    gulp.src('app/css/style.css') // Get source files with gulp.src
    .pipe(autoprefixer()) // Sends it through the autoprefixer
    .pipe(gulp.dest('build')); // Outputs the file in the destination folder
});

// Watch style.css and run the task 'styles' everytime the file is updated
gulp.task('watch', function(){
    gulp.watch('app/css/style.css', ['styles']);
});


// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"], function() {
	gulp.watch('app/css/style.css', ['styles']);
});

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function() {
	gulp.watch(["app/**/*"], ["webpack:build-dev"]);
});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function(callback) {
	// run webpack
	webpack(webpackConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
    });
    
    
});

// create a single instance of the compiler to allow caching
var devCompiler = webpack(webpackConfig);

gulp.task("webpack:build-dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task("webpack-dev-server", function(callback) {

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(webpackConfig), {
		stats: {
            colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});