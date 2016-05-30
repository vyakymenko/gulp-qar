# gulp-qar

[![Build Status](https://travis-ci.org/vyakymenko/gulp-qar.svg?branch=master)](https://travis-ci.org/vyakymenko/gulp-qar)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/vyakymenko/gulp-qar.svg)](https://david-dm.org/vyakymenko/gulp-qar)
[![devDependency Status](https://david-dm.org/vyakymenko/gulp-qar/dev-status.svg)](https://david-dm.org/vyakymenko/gulp-qar#info=devDependencies)

> Qar installer generator for QlikView Extensions

## Version
v 1.0.1

## Install

```
$ npm install --save-dev gulp-qar
```


## Usage

```javascript
var gulp = require('gulp'),
	qar = require('gulp-qar');

gulp.task('default', function () {
	return gulp.src('test/ExtensionExample/**/**', {base: "./test"})
		.pipe(qar())
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
