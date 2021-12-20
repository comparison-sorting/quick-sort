export function dualtco(partition) {
	const sort = function (compare, a, i, j) {
		while (true) {
			if (j - i < 2) return;

			const p = partition(compare, a, i, j);
			const l = p[0];
			const g = p[1];

			sort(compare, a, i, l);
			sort(compare, a, l + 1, g);

			i = g + 1;
		}
	};

	return sort;
}
