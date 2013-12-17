# grunt-styl [![Build Status](https://secure.travis-ci.org/sindresorhus/grunt-styl.png?branch=master)](http://travis-ci.org/sindresorhus/grunt-styl) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Preprocess CSS with [Styl](https://github.com/visionmedia/styl)


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install --save-dev grunt-styl
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-styl');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*


[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


## Example

```css
#logo {
	width: 50px;
	height: @width;
	absolute: top 100px left 50%;
	background: linear-gradient(top, black, white);
}
```

Is preprocessed into:

```css
#logo {
	width: 50px;
	height: 50px;
	position: absolute;
	top: 100px;
	left: 50%;
	background: -o-linear-gradient(top, black, white);
	background: -ms-linear-gradient(top, black, white);
	background: -moz-linear-gradient(top, black, white);
	background: -webkit-linear-gradient(top, black, white);
	background: linear-gradient(top, black, white)
}
```


## Documentation

Read more in the [Styl docs](https://github.com/visionmedia/styl#features).


### Example config

```javascript
grunt.initConfig({
	styl: {											// Task
		dist: {										// Target
			files: {								// Dictionary of files
				'dist/main.css': 'app/main.styl'	// 'destination': 'source'
			}
		}
	}
});

grunt.loadNpmTasks('grunt-styl');
grunt.registerTask('default', ['styl']);
```


### Options


#### whitespace

Type: `Boolean`  
Default: `false`

The Sass-style whitespace significant syntax supports nesting and parent selector references.


#### vendors

Type: `Array`  
Default: `['webkit', 'moz', 'ms', 'o']`

Vendor prefixes to apply.


#### compress

Type `Boolean`  
Default: `false`

Output compression.

#### configure

Type `Function`  
Default: `undefined`

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
