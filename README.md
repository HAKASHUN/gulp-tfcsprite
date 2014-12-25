(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-tfcsprite
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> tfcsprite plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-tfcsprite` as a development dependency:

```shell
npm install --save-dev gulp-tfcsprite
```

Then, add it to your `gulpfile.js`:

```javascript
var tfcsprite = require("gulp-tfcsprite");

gulp.src("./src/*.ext")
	.pipe(tfcsprite({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### tfcsprite(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-tfcsprite
[npm-image]: https://badge.fury.io/js/gulp-tfcsprite.png

[travis-url]: http://travis-ci.org/HAKASHUN/gulp-tfcsprite
[travis-image]: https://secure.travis-ci.org/HAKASHUN/gulp-tfcsprite.png?branch=master

[coveralls-url]: https://coveralls.io/r/HAKASHUN/gulp-tfcsprite
[coveralls-image]: https://coveralls.io/repos/HAKASHUN/gulp-tfcsprite/badge.png

[depstat-url]: https://david-dm.org/HAKASHUN/gulp-tfcsprite
[depstat-image]: https://david-dm.org/HAKASHUN/gulp-tfcsprite.png
