# grunt-styl [![Build Status](https://travis-ci.org/sindresorhus/grunt-styl.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-styl)

> Preprocess CSS with [Styl](https://github.com/visionmedia/styl)

## Install

```sh
$ npm install --save-dev grunt-styl
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	styl: {
		dist: {
			files: {
				'dist/main.css': 'app/main.styl'
			}
		}
	}
});

grunt.registerTask('default', ['styl']);
```


## Options

### whitespace

Type: `boolean`  
Default: `false`

The Sass-style whitespace significant syntax supports nesting and parent selector references.

### vendors

Type: `array`  
Default: `['webkit', 'moz', 'ms', 'o']`

Vendor prefixes to apply.

### compress

Type `boolean`  
Default: `false`

Output compression.

### configure

Type `function`  

Accepts a function that gives you the ability to interact with `styl` before compiling. Useful
for adding on plugins, etc.

In this example `stylVariables` is a plugin:

```js
grunt.initConfig({
	styl: {
		compile: {
			options: {
				whitespace: true,
				configure: function (styl) {
					styl.use(stylVariables());
				}
			},
			files: {
				'dist/main.css': 'app/main.styl'
			}
		}
	}
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
