var partition = require( "aureooms-js-partition" ) ;
var insitusortspec = require( "aureooms-js-in-situ-sort-spec" ) ;

insitusortspec.test( [
    [ "quicksort (hoare)", quicksort.__quicksort__( partition.hoare ) ],
    [ "quicksort (lomuto)", quicksort.__quicksort__( partition.lomuto ) ],
    [ "dualpivotquicksort (yaroslavskiy)", quicksort.__dualpivotquicksort__( partition.yaroslavskiy ) ],
] ) ;
