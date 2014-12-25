var through = require("through2"),
  gutil = require("gulp-util"),
  Path = require("path"),
  TFCSpriteConverter = require("tfcsprite");

module.exports = function (param) {
  "use strict";

  param.sprites = param.sprites || 'sprites';
  param.prefix = param.prefix || '_';

  function parsePath(path) {
    var extname = Path.extname(path);
    return {
      dirname: Path.dirname(path),
      basename: Path.basename(path, extname),
      extname: extname
    };
  }

  // see "Writing a plugin"
  // https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
  function tfcsprite(file, enc, callback) {
    /*jshint validthis:true*/

    // Do nothing if no contents
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isStream()) {

      // http://nodejs.org/api/stream.html
      // http://nodejs.org/api/child_process.html
      // https://github.com/dominictarr/event-stream

      // accepting streams is optional
      this.emit("error",
        new gutil.PluginError("gulp-tfcsprite", "Stream content is not supported"));
      return callback();
    }

    // check if file.contents is a `Buffer`
    if (file.isBuffer()) {

      var parsedPath = parsePath(file.path);
      var converted = new TFCSpriteConverter(
        file.path,
          parsedPath.dirname + '/' + param.sprites,
        param.prefix
      ).convert();


      file.contents = new Buffer(converted);

      this.push(file);

    }
    return callback();
  }

  return through.obj(tfcsprite);
};
