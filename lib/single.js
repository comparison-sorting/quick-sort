"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.single = single;


/**
 * Template for the recursive implementation of quicksort.
 * This template allows to generate a specific version of the quicksort
 * algorithm for a certain partitioning algorithm.
 *
 * @param {callable} partition the implementation for the partitioning step
 */

function single(partition) {

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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaW5nbGUuanMiXSwibmFtZXMiOlsic2luZ2xlIiwicGFydGl0aW9uIiwic29ydCIsImNvbXBhcmUiLCJhcnJheSIsImxlZnQiLCJyaWdodCIsInBpdm90Il0sIm1hcHBpbmdzIjoiOzs7OztRQVVnQkEsTSxHQUFBQSxNOzs7QUFSaEI7Ozs7Ozs7O0FBUU8sU0FBU0EsTUFBVCxDQUFrQkMsU0FBbEIsRUFBOEI7O0FBRXBDOzs7Ozs7Ozs7OztBQVdBLEtBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFXQyxPQUFYLEVBQXFCQyxLQUFyQixFQUE2QkMsSUFBN0IsRUFBb0NDLEtBQXBDLEVBQTRDOztBQUV4RDtBQUNBOztBQUVBLE1BQUtBLFFBQVFELElBQVIsR0FBZSxDQUFwQixFQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxRQUFRTixVQUFXRSxPQUFYLEVBQXFCQyxLQUFyQixFQUE2QkMsSUFBN0IsRUFBb0NDLEtBQXBDLENBQWQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBSixPQUFNQyxPQUFOLEVBQWdCQyxLQUFoQixFQUF3QkMsSUFBeEIsRUFBb0NFLEtBQXBDOztBQUVBO0FBQ0FMLE9BQU1DLE9BQU4sRUFBZ0JDLEtBQWhCLEVBQXdCRyxRQUFRLENBQWhDLEVBQW9DRCxLQUFwQztBQUVBLEVBeEJEOztBQTBCQSxRQUFPSixJQUFQO0FBRUEiLCJmaWxlIjoic2luZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogVGVtcGxhdGUgZm9yIHRoZSByZWN1cnNpdmUgaW1wbGVtZW50YXRpb24gb2YgcXVpY2tzb3J0LlxuICogVGhpcyB0ZW1wbGF0ZSBhbGxvd3MgdG8gZ2VuZXJhdGUgYSBzcGVjaWZpYyB2ZXJzaW9uIG9mIHRoZSBxdWlja3NvcnRcbiAqIGFsZ29yaXRobSBmb3IgYSBjZXJ0YWluIHBhcnRpdGlvbmluZyBhbGdvcml0aG0uXG4gKlxuICogQHBhcmFtIHtjYWxsYWJsZX0gcGFydGl0aW9uIHRoZSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIHBhcnRpdGlvbmluZyBzdGVwXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZSAoIHBhcnRpdGlvbiApIHtcblxuXHQvKipcblx0ICogU29ydHMgaW50ZXJ2YWwgW2xlZnQscmlnaHQpIG9mIHRoZSBhcnJheSBwYXJhbWV0ZXIgYWNjb3JkaW5nIHRvIGFcblx0ICogY29tcGFyZSBtZXRob2QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Y29tcGFyYXRvcn0gY29tcGFyZSB0aGUgY29tcGFyYXRvciBmdW5jdGlvblxuXHQgKiBAcGFyYW0ge2FycmF5fSBhcnJheSByYW5kb20gYWNjZXNzIGFycmF5XG5cdCAqIEBwYXJhbSB7b2Zmc2V0fSBsZWZ0IGlubmVyIGxlZnQgYm91bmQgb2YgdGhlIGludGVydmFsIHRvIHNvcnRcblx0ICogQHBhcmFtIHtvZmZzZXR9IHJpZ2h0IG91dGVyIHJpZ2h0IGJvdW5kIG9mIHRoZSBpbnRlcnZhbCB0byBzb3J0XG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IHNvcnQgPSBmdW5jdGlvbiAoIGNvbXBhcmUgLCBhcnJheSAsIGxlZnQgLCByaWdodCApIHtcblxuXHRcdC8vIGluIHRoZSBjYXNlIHdoZXJlIGludGVydmFsIFtsZWZ0LHJpZ2h0KSBjb250YWluc1xuXHRcdC8vIG9ubHkgb25lIGVsZW1lbnQgd2UgYXJlIGRvbmUhXG5cblx0XHRpZiAoIHJpZ2h0IC0gbGVmdCA8IDIgKSByZXR1cm4gO1xuXG5cdFx0Ly8gb3RoZXJ3aXNlIHdlIHBhcnRpdGlvbiBpbnRlcnZhbCBbbGVmdCxyaWdodCkgaW50byB0aHJlZSBkaXNqb2ludFxuXHRcdC8vIHN1YmludGVydmFscyBbbGVmdCxwaXZvdCksIFtwaXZvdCwgcGl2b3QrMSkgYW5kIFtwaXZvdCsxLHJpZ2h0KVxuXHRcdC8vIHdoZXJlIHRoZSBwaXZvdCBpcyB0aGUgcG9zaXRpb24gd2hvc2UgZWxlbWVudFxuXHRcdC8vIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gYWxsIGVsZW1lbnRzIG9mIHRoZSBmaXJzdCBzdWJpbnRlcnZhbFxuXHRcdC8vIGFuZCBsZXNzIG9yIGVxdWFsIHRvIGFsbCBlbGVtZW50cyBvZiB0aGUgdGhpcmQgc3ViaW50ZXJ2YWxcblxuXHRcdGNvbnN0IHBpdm90ID0gcGFydGl0aW9uKCBjb21wYXJlICwgYXJyYXkgLCBsZWZ0ICwgcmlnaHQgKSA7XG5cblx0XHQvLyBhbmQgdGhlbiB3ZSBqdXN0IG5lZWQgdG8gYXNrIHRoZSByZWN1cnNpb24gZmFpcnlcblx0XHQvLyB0byBzb3J0IHRoZSBmaXJzdCBhbmQgdGhpcmQgc3ViaW50ZXJ2YWxzXG5cblx0XHQvLyB0aGUgcmVjdXJzaW9uIGZhaXJ5IHNvcnRzIFtsZWZ0LHBpdm90KVxuXHRcdHNvcnQoIGNvbXBhcmUgLCBhcnJheSAsIGxlZnQgICAgICAsIHBpdm90ICkgO1xuXG5cdFx0Ly8gYW5kIHRoZW4gW3Bpdm90KzEscmlnaHQpXG5cdFx0c29ydCggY29tcGFyZSAsIGFycmF5ICwgcGl2b3QgKyAxICwgcmlnaHQgKSA7XG5cblx0fSA7XG5cblx0cmV0dXJuIHNvcnQgO1xuXG59XG4iXX0=