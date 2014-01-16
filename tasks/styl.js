'use strict';
var async = require('async');
var Style = require('styl');

module.exports = function (grunt) {
	grunt.registerMultiTask('styl', 'Preprocess CSS with Styl', function () {
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

		async.each(this.files, function (el, next) {
			var css = el.src.map(function (filePath) {
				return grunt.file.read(filePath);
			}).join(grunt.util.linefeed);

			try {
				var style = new Style(css, options);
			} catch (err) {
				err.message += ' in ' + el.src[0] + '\n';
				return grunt.warn(err);
			}

			if (configure) {
				configure(style);
			}

			style.vendors(vendors);

			grunt.file.write(el.dest, style.toString());

			next();
		}, this.async());
	});
};
