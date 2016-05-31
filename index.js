'use strict';
var path = require('path'),
	gutil = require('gulp-util'),
	through = require('through2'),
	archiver = require('archiver'),
	concatStream = require('concat-stream');

module.exports = function (file) {
	var firstFile;

	var archive = archiver.create('zip');

	return through.obj(function(file, enc, cb) {
		if (file.isStream()) {
			return cb(new gutil.PluginError('gulp-qar: ', 'Streaming not supported'));
		}

		if (!firstFile) {
			firstFile = file;
		}

		archive.directory(file.path, file.relative, null);

		cb();
	}, function(cb) {
		if (!firstFile) {
			cb();
			return;
		}

		var fileName = file || firstFile.relative;

		archive.finalize();
		archive.pipe(concatStream(function(data) {
			this.push(new gutil.File({
				cwd: firstFile.cwd,
				base: firstFile.base,
				path: path.join(firstFile.base, fileName+'.qar'),
				contents: data
			}));

			cb();
		}.bind(this)));
	});
};
