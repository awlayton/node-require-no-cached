[![Build Status](https://travis-ci.org/awlayton/node-require-no-cached.svg)](https://travis-ci.org/awlayton/node-require-no-cached)
[![Coverage Status](https://coveralls.io/repos/awlayton/node-require-no-cached/badge.svg)](https://coveralls.io/r/awlayton/node-require-no-cached)
[![Dependency Status](https://david-dm.org/awlayton/node-require-no-cached.svg)](https://david-dm.org/awlayton/node-require-no-cached)
[![License](http://img.shields.io/:license-Apache%202.0-green.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

# node-require-no-cached #
This module is essentially node's `require`,
but every time a module is loaded with node-require-no-cached
tha module is loaded as if it is its first time being `require`d.

I wrote this for testing modules in the node REPL.
I wanted to be able to change the code and then
require my module again and get the current version of the code
without restarting the REPL.

## Installation ##
```shell
npm install node-require-no-cached
```

## Usage ##
```javascript
var rerequire = require('require-no-cached');

// Use it just like require
var mod = rerequire('module-slug');

/* Do stuff with normally mod */
```
