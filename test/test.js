'use strict';
/* eslint-env mocha */
var assert = require('assert');
var grunt = require('grunt');

it('should preprocesses CSS', function () {
	var actual = grunt.file.read('test/tmp/preprocessed.css');
	var expected = grunt.file.read('test/fixture/expected.css');
	assert.equal(actual, expected);
});
