# Examples
```js
import * as compare from '@total-order/primitive';
import * as partition from '@comparison-sorting/partition';
import * as quicksort from '@comparison-sorting/quick-sort';

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
