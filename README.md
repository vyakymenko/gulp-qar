# gulp-qar

[![Build Status](https://travis-ci.org/vyakymenko/gulp-qar.svg?branch=master)](https://travis-ci.org/vyakymenko/gulp-qar)
[![Dependency Status](https://david-dm.org/vyakymenko/gulp-qar.svg)](https://david-dm.org/vyakymenko/gulp-qar)
[![devDependency Status](https://david-dm.org/vyakymenko/gulp-qar/dev-status.svg)](https://david-dm.org/vyakymenko/gulp-qar#info=devDependencies)

> Qar installer generator for QlikView Extensions

## Version
v 1.0.0

## Install

```
$ npm install --save-dev gulp-qar
```


## Usage

```javascript
var gulp = require('gulp'),
	qar = require('gulp-qar');

gulp.task('default', function () {
	return gulp.src('test/ExtensionExample')
		.pipe(qar())
		.pipe(gulp.dest('dist'));
});
```


## API

Supports [streaming mode](https://github.com/gulpjs/gulp/blob/master/docs/API.md#optionsbuffer).

### qar(extensionName)

### Optional

#### extensionName

Type: `string`

## License

MIT
