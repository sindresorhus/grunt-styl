'use strict';
var async = require('async');
var styl = require('styl');

module.exports = function (grunt) {
	grunt.registerMultiTask('styl', 'Preprocess CSS with Styl', function () {
		var opts = this.options({
			whitespace: false,
			vendors: ['webkit', 'moz', 'ms', 'o'],
			compress: false,
			configure: undefined
		});
		var configure = opts.configure;
		var vendors = opts.vendors.map(function (el) {
			return '-' + el + '-';
		});

		delete opts.vendors;
		delete opts.configure;

		async.each(this.files, function (el, next) {
			var ret;
			var src = el.src[0];

			try {
				ret = styl(grunt.file.read(src), opts);
			} catch (err) {
				err.message += ' in ' + src + '\n';
				grunt.warn(err);
				next();
				return;
			}

			if (configure) {
				configure(ret);
			}

			ret.vendors(vendors);
			grunt.file.write(el.dest, ret.toString());
			next();
		}, this.async());
	});
};
