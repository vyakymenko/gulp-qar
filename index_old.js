'use strict';
var path = require('path'),
	gutil = require('gulp-util'),
	through = require('through2'),
	Yazl = require('yazl'),
	concatStream = require('concat-stream');

module.exports = function (extensionName) {

	var firstFile,
		zip = new Yazl.ZipFile();

	return through.obj(function (file, enc, cb) {
		if (!firstFile) {
			firstFile = file;
		}

		var pathname = file.relative.replace(/\\/g, '/');
			extensionName = extensionName || pathname;

		if (!pathname) {
			cb();
			return;
		}

		if (file.isNull() && file.stat && file.stat.isDirectory && file.stat.isDirectory()) {
			zip.addEmptyDirectory(pathname, {
				mtime: file.stat.mtime || new Date(),
				mode: file.stat.mode
			});
		} else {
			var stat = {
				compress: true,
				mtime: file.stat ? file.stat.mtime : new Date(),
				mode: file.stat ? file.stat.mode : null
			};

			if (file.isStream()) {
				zip.addReadStream(file.contents, pathname, stat);
			}

			if (file.isBuffer()) {
				zip.addBuffer(file.contents, pathname, stat);
			}
		}

		cb();
	}, function (cb) {
		if (!firstFile) {
			cb();
			return;
		}

		zip.end(function () {
			zip.outputStream.pipe(concatStream(function (data) {
				this.push(new gutil.File({
					cwd: firstFile.cwd,
					base: firstFile.base,
					path: path.join(firstFile.base, extensionName+'.qar'),
					contents: data
				}));

				cb();
			}.bind(this)));
		}.bind(this));
	});
};
