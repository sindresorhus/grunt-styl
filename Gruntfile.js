'use strict';
var reworkNpm = require('rework-npm');

module.exports = function (grunt) {
	grunt.initConfig({
		styl: {
			options: {
				use: [reworkNpm()]
			},
			compile: {
				files: {
					'test/tmp/preprocessed.css': 'test/fixture/original.css'
				}
			}
		},
		simplemocha: {
			test: {
				src: 'test/*.js'
			}
		},
		clean: {
			test: ['test/tmp']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['clean', 'styl', 'simplemocha', 'clean']);
};
