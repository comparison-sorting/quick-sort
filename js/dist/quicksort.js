"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/dualpivotquicksort.js */

		var __dualpivotquicksort__ = function __dualpivotquicksort__(partition) {

			var dualpivotquicksort = function dualpivotquicksort(compare, a, i, j) {

				var p, g, l;

				if (j - i < 2) {
					return;
				}

				p = partition(compare, a, i, j);
				l = p[0];
				g = p[1];

				dualpivotquicksort(compare, a, i, l);
				dualpivotquicksort(compare, a, l + 1, g);
				dualpivotquicksort(compare, a, g + 1, j);
			};

			return dualpivotquicksort;
		};

		exports.__dualpivotquicksort__ = __dualpivotquicksort__;

		/* js/src/quicksort.js */

		/**
   * Template for the recursive implementation of quicksort.
   * This template allows to generate a specific version of the quicksort
   * algorithm for a certain partitioning algorithm.
   *
   * @param {callable} partition the implementation for the partitioning step
   */

		var __quicksort__ = function __quicksort__(partition) {

			/**
    * Sorts interval [left,right) of the array parameter according to a
    * compare method.
    *
    * @param {comparator} compare the comparator function
    * @param {array} array random access array
    * @param {offset} left inner left bound of the interval to sort
    * @param {offset} right outer right bound of the interval to sort
    *
    */

			var quicksort = function quicksort(compare, array, left, right) {

				var pivot;

				// in the case where interval [left,right) contains
				// only one element we are done!

				if (right - left < 2) return;

				// otherwise we partition interval [left,right) into three disjoint
				// subintervals [left,pivot), [pivot, pivot+1) and [pivot+1,right)
				// where the pivot is the position whose element
				// is greater or equal to all elements of the first subinterval
				// and less or equal to all elements of the third subinterval

				pivot = partition(compare, array, left, right);

				// and then we just need to ask the recursion fairy
				// to sort the first and third subintervals

				// the recursion fairy sorts [left,pivot)
				quicksort(compare, array, left, pivot);

				// and then [pivot+1,right)
				quicksort(compare, array, pivot + 1, right);
			};

			return quicksort;
		};

		exports.__quicksort__ = __quicksort__;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-quicksort", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["quicksort"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-quicksort");
})();