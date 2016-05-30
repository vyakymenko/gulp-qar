'use strict';
var path = require('path'),
	fs = require('fs'),
	gutil = require('gulp-util'),
	map = require('map-stream'),
	archiver = require('archiver');

module.exports = function (extensionName) {
	return map(function (file, cb) {

		extensionName = extensionName || file.relative;

		if (file.isStream()) {
			return cb(new gutil.PluginError('gulp-qar', 'Streaming not supported'));
		}

		var output = fs.createWriteStream(extensionName+'.qar'),
			archive = archiver('zip');

		output.on('close', function () {
			gutil.log('gulp-qar:', gutil.colors.green('✔ ') + extensionName + ' instalation created. Size: '+ archive.pointer() + ' total bytes');
			// CB
			cb(null, file);
		});

		archive.on('error', function(err){
			return cb(new gutil.PluginError('gulp-qar:', err));
		});

		// console.log(file.path);
		// console.log(file.relative);
		// console.log(file.contents);
		// console.log('Base and CWD');
		// console.log(file.cwd);
		// console.log(file.base);
		// console.log(file);
		//
		// // console.log(path.extname(file.path));

		archive.pipe(output);
		archive.directory(file.path, extensionName);
		archive.finalize();
	});
};
