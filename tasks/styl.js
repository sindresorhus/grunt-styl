'use strict';
module.exports = function (grunt) {
	grunt.registerMultiTask('styl', 'Preprocess CSS with Styl', function () {
		var Style = require('styl');
		var options = this.options({
			whitespace: false,
			vendors: ['webkit', 'moz', 'ms', 'o'],
			compress: false,
      configure: undefined
		});
    var configure = options.configure;
		var vendors = options.vendors.map(function (el) {
			return '-' + el + '-';
		});

		delete options.vendors;
    delete options.configure;

		grunt.util.async.forEach(this.files, function (el, next) {
			var css = el.src.map(function (filePath) {
				return grunt.file.read(filePath);
			}).join(grunt.util.linefeed);

			var style = new Style(css, options);
      if(configure) {
        configure(style);
      }
			style.vendors(vendors);

			grunt.file.write(el.dest, style.toString());

			next();
		}, this.async());
	});
};
