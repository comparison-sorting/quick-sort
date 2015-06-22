[js-quicksort](http://aureooms.github.io/js-quicksort)
==

Sorting code bricks for JavaScript.

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

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let sort = require( "aureooms-js-quicksort" ) ;
```

## Use

```js
let compare = require( "aureooms-js-compare" ) ;

/** quicksort using hoare partitioning */
let quicksort = sort.__quicksort__( sort.hoare ) ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

quicksort( compare.increasing , a , 0 , a.length ) ;

a ; // [ 1 , 2 , 3 , 4 , 5 , 6 ]

quicksort( compare.decreasing , a , 0 , a.length ) ;

a ; // [ 6 , 5 , 4 , 3 , 2 , 1 ]

// but also

/** binary heapsort */
let heapsort = sort.__heapsort__( 2 ) ;
/** ternary heapsort */
let heapsort = sort.__heapsort__( 3 ) ;
/** quicksort (lomuto) */
let quicksort = sort.__quicksort__( sort.lomuto ) ;
/** dualpivotquicksort (yaroslavskiy) */
let quicksort = sort.__dualpivotquicksort__( sort.yaroslavskiy ) ;
/** insertionsort */
let insertionsort = sort.insertionsort ;
/** selectionsort */
let selectionsort = sort.selectionsort ;
/** bubblesort */
let bubblesort = sort.bubblesort ;
```

## Reference

  - https://kluedo.ub.uni-kl.de/frontdoor/index/index/docId/3463
  - http://sorting.at

***( forked from [js-sort](https://github.com/aureooms/js-sort) )***
