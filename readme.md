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
			options: {
				use: [require('rework-npm')()]
			},
			files: {
				'dist/main.css': 'app/main.styl'
			}
		}
	}
});

grunt.registerTask('default', ['styl']);
```


## Options

### use

Type: `array`  

[Rework plugins.](https://www.npmjs.org/search?q=rework)

### whitespace

Type: `boolean`  
Default: `false`

The Sass-style whitespace significant syntax supports nesting and parent selector references.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
