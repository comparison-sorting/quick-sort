import ava from 'ava' ;

import partition from "aureooms-js-partition" ;
import * as insitusortspec from "aureooms-js-in-situ-sort-spec" ;

import * as quicksort from '../../src' ;

insitusortspec.test( ava , [
    [ "single pivot quicksort (hoare)", quicksort.single( partition.hoare ) ],
    [ "single pivot quicksort (lomuto)", quicksort.single( partition.lomuto ) ],
    [ "single pivot quicksort with explicit tail call optimization (hoare)", quicksort.singletco( partition.hoare ) ],
    [ "single pivot quicksort with explicit tail call optimization (lomuto)", quicksort.singletco( partition.lomuto ) ],
    [ "dual pivot quicksort (yaroslavskiy)", quicksort.dual( partition.yaroslavskiy ) ],
    [ "dual pivot quicksort with explicit tail call optimization (yaroslavskiy)", quicksort.dualtco( partition.yaroslavskiy ) ]
] ) ;
