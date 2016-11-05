var partition = require( "aureooms-js-partition" ) ;
var insitusortspec = require( "aureooms-js-in-situ-sort-spec" ) ;

insitusortspec.test( [
    [ "single pivot quicksort (hoare)", quicksort.single( partition.hoare ) ],
    [ "single pivot quicksort (lomuto)", quicksort.single( partition.lomuto ) ],
    [ "single pivot quicksort with explicit tail call optimization (hoare)", quicksort.singletco( partition.hoare ) ],
    [ "single pivot quicksort with explicit tail call optimization (lomuto)", quicksort.singletco( partition.lomuto ) ],
    [ "dual pivot quicksort (yaroslavskiy)", quicksort.dual( partition.yaroslavskiy ) ],
    [ "dual pivot quicksort with explicit tail call optimization (yaroslavskiy)", quicksort.dualtco( partition.yaroslavskiy ) ]
] ) ;
