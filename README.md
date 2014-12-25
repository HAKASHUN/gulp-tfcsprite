# gulp-tfcsprite
[![Build Status](https://travis-ci.org/HAKASHUN/gulp-tfcsprite.svg?branch=master)](https://travis-ci.org/HAKASHUN/gulp-tfcsprite)
> [tfcsprite](https://github.com/atsumo/tfcsprite/) plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-tfcsprite` as a development dependency:

```shell
npm install --save-dev gulp-tfcsprite
```

Then, add it to your `gulpfile.js`:

```javascript
var tfcsprite = require("gulp-tfcsprite");

gulp.src("./src/*.js")
	.pipe(tfcsprite({
	  prefix: '_',
	  sprites: 'sprites'
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### tfcsprite(options)

#### options.prefix
Type: `String`  
Default: `_`

image name prefix, default is "_" 

#### options.sprites
Type: `String`  
Default: `sprites`

sprite file json data directory, default is sprites

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-tfcsprite
[npm-image]: https://badge.fury.io/js/gulp-tfcsprite.png

[travis-url]: http://travis-ci.org/HAKASHUN/gulp-tfcsprite
[travis-image]: https://secure.travis-ci.org/HAKASHUN/gulp-tfcsprite.png?branch=master
