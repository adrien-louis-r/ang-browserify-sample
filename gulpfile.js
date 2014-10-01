var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename =  require('gulp-rename');

gulp.task('browserify', function() {
	gulp.src('app/app.js')
		.pipe(browserify({
			insertGlobals: true
		}))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('./htdocs/dest'))
});

gulp.task('watch', function() {
	gulp.watch(['app/**/*.js'],[
		'browserify'
	]);
});