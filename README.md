# dotdir-regex [![NPM version](https://img.shields.io/npm/v/dotdir-regex.svg?style=flat)](https://www.npmjs.com/package/dotdir-regex) [![NPM monthly downloads](https://img.shields.io/npm/dm/dotdir-regex.svg?style=flat)](https://npmjs.org/package/dotdir-regex) [![NPM total downloads](https://img.shields.io/npm/dt/dotdir-regex.svg?style=flat)](https://npmjs.org/package/dotdir-regex) [![Linux Build Status](https://img.shields.io/travis/regexps/dotdir-regex.svg?style=flat&label=Travis)](https://travis-ci.org/regexps/dotdir-regex)

> Regex for matching dot-directories, like `.git/`

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save dotdir-regex
```

## Usage

To be considered a dot **directory**:

* the path must contain a dot that is at the beginning of the string or following a slash
* the next character after the dot must not be another dot
* one or more non-slash characters must follow the dot
* a slash must follow after at least one non-dot, non-slash character

To check for dot **files**, use [dotfile-regex](https://github.com/regexps/dotfile-regex) instead.

```js
var regex = require('dotdir-regex');

var match = regex().exec('.git/a/b/c');
// match[1] => '.git'

regex().test('a/b/c/.gitignore');
//=> false

regex().test('a/.git/a/b/');
//=> true
```

## About

### Related projects

* [dotfile-regex](https://www.npmjs.com/package/dotfile-regex): Regular expresson for matching dotfiles. | [homepage](https://github.com/regexps/dotfile-regex "Regular expresson for matching dotfiles.")
* [is-dotdir](https://www.npmjs.com/package/is-dotdir): Returns true if a path is a dot-directory. | [homepage](https://github.com/jonschlinkert/is-dotdir "Returns true if a path is a dot-directory.")
* [is-dotfile](https://www.npmjs.com/package/is-dotfile): Return true if a file path is (or has) a dotfile. Returns false if the… [more](https://github.com/jonschlinkert/is-dotfile) | [homepage](https://github.com/jonschlinkert/is-dotfile "Return true if a file path is (or has) a dotfile. Returns false if the path is a dot directory.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on May 30, 2017._