'use strict';
var async = require('async');
var Styl = require('styl');

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
			var styl;
			var src = el.src[0];

			try {
				styl = new Styl(grunt.file.read(src), options);
			} catch (err) {
				err.message += ' in ' + src + '\n';
				grunt.warn(err);
				return;
			}

			if (configure) {
				configure(styl);
			}

			styl.vendors(vendors);
			grunt.file.write(el.dest, styl.toString());
			next();
		}, this.async());
	});
};
