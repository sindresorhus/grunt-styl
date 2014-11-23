'use strict';
var styl = require('styl');

module.exports = function (grunt) {
	grunt.registerMultiTask('styl', 'Preprocess CSS with Styl', function () {
		var opts = this.options({
			whitespace: false,
			use: []
		});

		this.files.forEach(function (el) {
			var ret;
			var src = el.src[0];

			try {
				ret = styl(grunt.file.read(src), opts);
			} catch (err) {
				err.message += ' in ' + src + '\n';
				err.fileName = src;
				grunt.warn(err);
				return;
			}

			opts.use.forEach(ret.use.bind(ret));
			grunt.file.write(el.dest, ret.toString());
		});
	});
};
