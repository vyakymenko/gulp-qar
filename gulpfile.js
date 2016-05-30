var gulp = require('gulp'),
	qar = require('./');

gulp.task('default', function () {
	return gulp.src('test/ExtensionExample/**/**', {base: "./test"})
		.pipe(qar())
		.pipe(gulp.dest('dist'));
});
