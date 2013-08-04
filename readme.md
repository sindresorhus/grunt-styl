# grunt-styl [![Build Status](https://secure.travis-ci.org/sindresorhus/grunt-styl.png?branch=master)](http://travis-ci.org/sindresorhus/grunt-styl)

[Grunt][grunt] task to preprocess CSS with [Styl](https://github.com/visionmedia/styl)

> Styl is a work in progress CSS processor, spiritual successor of [Stylus](http://learnboost.github.io/stylus/) built on top of [Rework](https://github.com/visionmedia/rework). Styl is basically an opinionated configuration of Rework, and does not aim for feature parity with Stylus.


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install --save-dev grunt-styl
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-styl');
```

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
				'dist/main.css': 'app/main.css'		// 'destination': 'source'
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

Function that manipulates the styl compiler before use. Useful
for adding on plugins, etc. For example:

    styl: {
    compile: {
      options: {
        whitespace: true,
        configure: function(styl) {
          styl.use(stylVariables());
        }
      },
      files: {
        'public/main.css': ['styl/*.styl']
      }
    }
  },


## License

MIT License • © [Sindre Sorhus](http://sindresorhus.com)
