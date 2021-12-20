export function dual(partition) {
	const sort = function (compare, a, i, j) {
		if (j - i < 2) return;

		const p = partition(compare, a, i, j);
		const l = p[0];
		const g = p[1];

		sort(compare, a, i, l);
		sort(compare, a, l + 1, g);
		sort(compare, a, g + 1, j);
	};

	return sort;
}
