# Deprecated

Deprecated as the Styl project is no longer maintained.

---

# grunt-styl [![Build Status](https://travis-ci.org/sindresorhus/grunt-styl.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-styl)

> Preprocess CSS with [Styl](https://github.com/visionmedia/styl)


## Install

```
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

Type: `array`<br>

[Rework plugins.](https://www.npmjs.org/search?q=rework)

### whitespace

Type: `boolean`<br>
Default: `false`

The Sass-style whitespace significant syntax supports nesting and parent selector references.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
