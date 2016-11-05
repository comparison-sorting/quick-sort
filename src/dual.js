
let dual = function ( partition ) {

	let sort = function ( compare, a, i, j ) {

		if ( j - i < 2 ) return ;

		let p = partition( compare , a , i , j ) ;
		let l = p[0] ;
		let g = p[1] ;

		sort( compare, a,   i  , l ) ;
		sort( compare, a, l + 1, g ) ;
		sort( compare, a, g + 1, j ) ;

	} ;

	return sort ;

} ;

exports.dual = dual ;
