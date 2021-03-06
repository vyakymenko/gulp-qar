# gulp-qar

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/vyakymenko/gulp-qar.svg)](https://david-dm.org/vyakymenko/gulp-qar)
[![devDependency Status](https://david-dm.org/vyakymenko/gulp-qar/dev-status.svg)](https://david-dm.org/vyakymenko/gulp-qar#info=devDependencies)

> Gulp Qar installer generator for QlikView Extensions

## SUPPORT DEPRECATED

## Version
v 1.0.5

## Install

```
$ npm install --save-dev gulp-qar
```


## Usage

```javascript
// Without extensionName Argument --> ExtensionExample.qar
var gulp = require('gulp'),
	qar = require('gulp-qar');

gulp.task('default', function () {
	return gulp.src('test/ExtensionExample')
		.pipe(qar())
		.pipe(gulp.dest('dist'));
});

// With extensionName Argument --> RenameMyExtension.qar
// @note: Keep in mind it's only rename the .qar file and will not change extension inside.
var gulp = require('gulp'),
	qar = require('gulp-qar');

gulp.task('default', function () {
	return gulp.src('test/ExtensionExample')
		.pipe(qar('RenameMyExtension'))
		.pipe(gulp.dest('dist'));
});
```


## API

### qar(extensionName)

### Optional

#### extensionName

Type: `string`

## License

MIT
