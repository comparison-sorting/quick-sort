"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/dual.js */

		var dual = function dual(partition) {

			var sort = function sort(compare, a, i, j) {

				if (j - i < 2) return;

				var p = partition(compare, a, i, j);
				var l = p[0];
				var g = p[1];

				sort(compare, a, i, l);
				sort(compare, a, l + 1, g);
				sort(compare, a, g + 1, j);
			};

			return sort;
		};

		exports.dual = dual;

		/* js/src/dualtco.js */

		var dualtco = function dualtco(partition) {

			var sort = function sort(compare, a, i, j) {

				while (true) {

					if (j - i < 2) return;

					var p = partition(compare, a, i, j);
					var l = p[0];
					var g = p[1];

					sort(compare, a, i, l);
					sort(compare, a, l + 1, g);

					i = g + 1;
				}
			};

			return sort;
		};

		exports.dualtco = dualtco;

		/* js/src/single.js */

		/**
   * Template for the recursive implementation of quicksort.
   * This template allows to generate a specific version of the quicksort
   * algorithm for a certain partitioning algorithm.
   *
   * @param {callable} partition the implementation for the partitioning step
   */

		var single = function single(partition) {

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

			var sort = function sort(compare, array, left, right) {

				// in the case where interval [left,right) contains
				// only one element we are done!

				if (right - left < 2) return;

				// otherwise we partition interval [left,right) into three disjoint
				// subintervals [left,pivot), [pivot, pivot+1) and [pivot+1,right)
				// where the pivot is the position whose element
				// is greater or equal to all elements of the first subinterval
				// and less or equal to all elements of the third subinterval

				var pivot = partition(compare, array, left, right);

				// and then we just need to ask the recursion fairy
				// to sort the first and third subintervals

				// the recursion fairy sorts [left,pivot)
				sort(compare, array, left, pivot);

				// and then [pivot+1,right)
				sort(compare, array, pivot + 1, right);
			};

			return sort;
		};

		exports.single = single;

		/* js/src/singletco.js */

		/**
   * Template for the recursive implementation of quicksort with explicit tail
   * call optimization.
   * This template allows to generate a specific version of the quicksort
   * algorithm for a certain partitioning algorithm.
   *
   * @param {callable} partition the implementation for the partitioning step
   */

		var singletco = function singletco(partition) {

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

			var sort = function sort(compare, array, left, right) {

				while (true) {

					// in the case where interval [left,right) contains
					// only one element we are done!

					if (right - left < 2) return;

					// otherwise we partition interval [left,right) into three disjoint
					// subintervals [left,pivot), [pivot, pivot+1) and [pivot+1,right)
					// where the pivot is the position whose element
					// is greater or equal to all elements of the first subinterval
					// and less or equal to all elements of the third subinterval

					var pivot = partition(compare, array, left, right);

					// and then we just need to ask the recursion fairy
					// to sort the first and third subintervals

					// the recursion fairy sorts [left,pivot)
					sort(compare, array, left, pivot);

					// and then [pivot+1,right)
					left = pivot + 1;
				}
			};

			return sort;
		};

		exports.singletco = singletco;

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