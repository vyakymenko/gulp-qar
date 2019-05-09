const gulp = require('gulp'),
	qar = require('./');

gulp.task('default',
	gulp.src('test/ExtensionExample')
		.pipe(qar())
		.pipe(gulp.dest('dist'))
);
