"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.singletco = singletco;


/**
 * Template for the recursive implementation of quicksort with explicit tail
 * call optimization.
 * This template allows to generate a specific version of the quicksort
 * algorithm for a certain partitioning algorithm.
 *
 * @param {callable} partition the implementation for the partitioning step
 */

function singletco(partition) {

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
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaW5nbGV0Y28uanMiXSwibmFtZXMiOlsic2luZ2xldGNvIiwicGFydGl0aW9uIiwic29ydCIsImNvbXBhcmUiLCJhcnJheSIsImxlZnQiLCJyaWdodCIsInBpdm90Il0sIm1hcHBpbmdzIjoiOzs7OztRQVdnQkEsUyxHQUFBQSxTOzs7QUFUaEI7Ozs7Ozs7OztBQVNPLFNBQVNBLFNBQVQsQ0FBcUJDLFNBQXJCLEVBQWlDOztBQUV2Qzs7Ozs7Ozs7Ozs7QUFXQSxLQUFNQyxPQUFPLFNBQVBBLElBQU8sQ0FBV0MsT0FBWCxFQUFxQkMsS0FBckIsRUFBNkJDLElBQTdCLEVBQW9DQyxLQUFwQyxFQUE0Qzs7QUFFeEQsU0FBUSxJQUFSLEVBQWU7O0FBRWQ7QUFDQTs7QUFFQSxPQUFLQSxRQUFRRCxJQUFSLEdBQWUsQ0FBcEIsRUFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTUUsUUFBUU4sVUFBV0UsT0FBWCxFQUFxQkMsS0FBckIsRUFBNkJDLElBQTdCLEVBQW9DQyxLQUFwQyxDQUFkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQUosUUFBTUMsT0FBTixFQUFnQkMsS0FBaEIsRUFBd0JDLElBQXhCLEVBQW9DRSxLQUFwQzs7QUFFQTtBQUNBRixVQUFPRSxRQUFRLENBQWY7QUFFQTtBQUVELEVBNUJEOztBQThCQSxRQUFPTCxJQUFQO0FBRUEiLCJmaWxlIjoic2luZ2xldGNvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogVGVtcGxhdGUgZm9yIHRoZSByZWN1cnNpdmUgaW1wbGVtZW50YXRpb24gb2YgcXVpY2tzb3J0IHdpdGggZXhwbGljaXQgdGFpbFxuICogY2FsbCBvcHRpbWl6YXRpb24uXG4gKiBUaGlzIHRlbXBsYXRlIGFsbG93cyB0byBnZW5lcmF0ZSBhIHNwZWNpZmljIHZlcnNpb24gb2YgdGhlIHF1aWNrc29ydFxuICogYWxnb3JpdGhtIGZvciBhIGNlcnRhaW4gcGFydGl0aW9uaW5nIGFsZ29yaXRobS5cbiAqXG4gKiBAcGFyYW0ge2NhbGxhYmxlfSBwYXJ0aXRpb24gdGhlIGltcGxlbWVudGF0aW9uIGZvciB0aGUgcGFydGl0aW9uaW5nIHN0ZXBcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xldGNvICggcGFydGl0aW9uICkge1xuXG5cdC8qKlxuXHQgKiBTb3J0cyBpbnRlcnZhbCBbbGVmdCxyaWdodCkgb2YgdGhlIGFycmF5IHBhcmFtZXRlciBhY2NvcmRpbmcgdG8gYVxuXHQgKiBjb21wYXJlIG1ldGhvZC5cblx0ICpcblx0ICogQHBhcmFtIHtjb21wYXJhdG9yfSBjb21wYXJlIHRoZSBjb21wYXJhdG9yIGZ1bmN0aW9uXG5cdCAqIEBwYXJhbSB7YXJyYXl9IGFycmF5IHJhbmRvbSBhY2Nlc3MgYXJyYXlcblx0ICogQHBhcmFtIHtvZmZzZXR9IGxlZnQgaW5uZXIgbGVmdCBib3VuZCBvZiB0aGUgaW50ZXJ2YWwgdG8gc29ydFxuXHQgKiBAcGFyYW0ge29mZnNldH0gcmlnaHQgb3V0ZXIgcmlnaHQgYm91bmQgb2YgdGhlIGludGVydmFsIHRvIHNvcnRcblx0ICpcblx0ICovXG5cblx0Y29uc3Qgc29ydCA9IGZ1bmN0aW9uICggY29tcGFyZSAsIGFycmF5ICwgbGVmdCAsIHJpZ2h0ICkge1xuXG5cdFx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0XHQvLyBpbiB0aGUgY2FzZSB3aGVyZSBpbnRlcnZhbCBbbGVmdCxyaWdodCkgY29udGFpbnNcblx0XHRcdC8vIG9ubHkgb25lIGVsZW1lbnQgd2UgYXJlIGRvbmUhXG5cblx0XHRcdGlmICggcmlnaHQgLSBsZWZ0IDwgMiApIHJldHVybiA7XG5cblx0XHRcdC8vIG90aGVyd2lzZSB3ZSBwYXJ0aXRpb24gaW50ZXJ2YWwgW2xlZnQscmlnaHQpIGludG8gdGhyZWUgZGlzam9pbnRcblx0XHRcdC8vIHN1YmludGVydmFscyBbbGVmdCxwaXZvdCksIFtwaXZvdCwgcGl2b3QrMSkgYW5kIFtwaXZvdCsxLHJpZ2h0KVxuXHRcdFx0Ly8gd2hlcmUgdGhlIHBpdm90IGlzIHRoZSBwb3NpdGlvbiB3aG9zZSBlbGVtZW50XG5cdFx0XHQvLyBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIGFsbCBlbGVtZW50cyBvZiB0aGUgZmlyc3Qgc3ViaW50ZXJ2YWxcblx0XHRcdC8vIGFuZCBsZXNzIG9yIGVxdWFsIHRvIGFsbCBlbGVtZW50cyBvZiB0aGUgdGhpcmQgc3ViaW50ZXJ2YWxcblxuXHRcdFx0Y29uc3QgcGl2b3QgPSBwYXJ0aXRpb24oIGNvbXBhcmUgLCBhcnJheSAsIGxlZnQgLCByaWdodCApIDtcblxuXHRcdFx0Ly8gYW5kIHRoZW4gd2UganVzdCBuZWVkIHRvIGFzayB0aGUgcmVjdXJzaW9uIGZhaXJ5XG5cdFx0XHQvLyB0byBzb3J0IHRoZSBmaXJzdCBhbmQgdGhpcmQgc3ViaW50ZXJ2YWxzXG5cblx0XHRcdC8vIHRoZSByZWN1cnNpb24gZmFpcnkgc29ydHMgW2xlZnQscGl2b3QpXG5cdFx0XHRzb3J0KCBjb21wYXJlICwgYXJyYXkgLCBsZWZ0ICAgICAgLCBwaXZvdCApIDtcblxuXHRcdFx0Ly8gYW5kIHRoZW4gW3Bpdm90KzEscmlnaHQpXG5cdFx0XHRsZWZ0ID0gcGl2b3QgKyAxIDtcblxuXHRcdH1cblxuXHR9IDtcblxuXHRyZXR1cm4gc29ydCA7XG5cbn1cbiJdfQ==