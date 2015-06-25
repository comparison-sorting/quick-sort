[js-quicksort](http://aureooms.github.io/js-quicksort)
==

Quicksort code bricks for JavaScript.

```js
let sort = quicksort.singletco( partition.hoare ) ;
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-quicksort.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-quicksort/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-quicksort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-quicksort)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-quicksort.svg?style=flat)](http://bower.io/search/?q=aureooms-js-quicksort)
[![Build Status](http://img.shields.io/travis/aureooms/js-quicksort.svg?style=flat)](https://travis-ci.org/aureooms/js-quicksort)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-quicksort.svg?style=flat)](https://coveralls.io/r/aureooms/js-quicksort)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-quicksort.svg?style=flat)](https://david-dm.org/aureooms/js-quicksort#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-quicksort.svg?style=flat)](https://david-dm.org/aureooms/js-quicksort#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-quicksort.svg?style=flat)](https://codeclimate.com/github/aureooms/js-quicksort)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-quicksort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-quicksort)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-quicksort.svg?style=flat)](https://github.com/aureooms/js-quicksort/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-quicksort.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-quicksort)


Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-quicksort
# or
jspm install npm:aureooms-js-quicksort
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-quicksort
```

### bower
```terminal
bower install aureooms-js-quicksort
```

### ender
```terminal
ender add aureooms-js-quicksort
```

### jam
```terminal
jam install aureooms-js-quicksort
```

### spm
```terminal
spm install aureooms-js-quicksort --save
```

### npm
```terminal
npm install aureooms-js-quicksort --save
```

## Require
### jspm
```js
let quicksort = require( "github:aureooms/js-quicksort" ) ;
// or
import quicksort from 'aureooms-js-quicksort' ;
```
### duo
```js
let quicksort = require( "aureooms/js-quicksort" ) ;
```

### component, ender, spm, npm
```js
let quicksort = require( "aureooms-js-quicksort" ) ;
```

### bower
The script tag exposes the global variable `quicksort`.
```html
<script src="bower_components/aureooms-js-quicksort/js/dist/quicksort.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-quicksort" ] , function ( quicksort ) { ... } ) ;
```

## Use

```js
let partition = require( "aureooms-js-partition" ) ;
let compare = require( "aureooms-js-compare" ) ;

/** recursive single pivot quicksort using Hoare's partitioning algorithm*/
let sort = quicksort.single( partition.hoare ) ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

sort( compare.increasing , a , 0 , a.length ) ;

a ; // [ 1 , 2 , 3 , 4 , 5 , 6 ]

sort( compare.decreasing , a , 0 , a.length ) ;

a ; // [ 6 , 5 , 4 , 3 , 2 , 1 ]

// but also

/** recursive single pivot quicksort using Lomuto's partitioning algorithm */
let sort = quicksort.single( partition.lomuto ) ;
/** with explicit tail call optimization */
let sort = quicksort.singletco( partition.hoare ) ;
let sort = quicksort.singletco( partition.lomuto ) ;

/** recursive dual pivot quicksort using Yaroslavskiy's partitioning algorithm*/
let sort = quicksort.dual( partition.yaroslavskiy ) ;
/** with explicit tail call optimization */
let sort = quicksort.dualtco( partition.yaroslavskiy ) ;
```

## Reference

  - https://kluedo.ub.uni-kl.de/frontdoor/index/index/docId/3463
  - http://sorting.at
