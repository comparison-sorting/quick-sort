
let dualtco = function ( partition ) {

	let sort = function ( compare, a, i, j ) {

		while ( true ) {

			if ( j - i < 2 ) return ;

			let p = partition( compare , a , i , j ) ;
			let l = p[0] ;
			let g = p[1] ;

			sort( compare, a,   i  , l ) ;
			sort( compare, a, l + 1, g ) ;

			i = g + 1 ;

		}

	} ;

	return sort ;

} ;

exports.dualtco = dualtco ;
