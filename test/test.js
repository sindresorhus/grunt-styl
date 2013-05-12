/*global describe, it */
'use strict';
var assert = require('assert');
var grunt = require('grunt');

describe('styl', function () {
	it('preprocesses CSS', function () {
		var actual = grunt.file.read('test/tmp/preprocessed.css');
		var expected = grunt.file.read('test/fixture/expected.css');
		assert.equal(actual, expected);
	});
});
