// eslint-disable-next-line ava/use-test
import ava from 'ava';

import * as partition from '@comparison-sorting/partition';
import * as spec from '@comparison-sorting/specification';

import * as quicksort from '../../src/index.js';

spec.test(ava, [
	['single pivot quicksort (hoare)', quicksort.single(partition.hoare)],
	['single pivot quicksort (lomuto)', quicksort.single(partition.lomuto)],
	[
		'single pivot quicksort with explicit tail call optimization (hoare)',
		quicksort.singletco(partition.hoare),
	],
	[
		'single pivot quicksort with explicit tail call optimization (lomuto)',
		quicksort.singletco(partition.lomuto),
	],
	[
		'dual pivot quicksort (yaroslavskiy)',
		quicksort.dual(partition.yaroslavskiy),
	],
	[
		'dual pivot quicksort with explicit tail call optimization (yaroslavskiy)',
		quicksort.dualtco(partition.yaroslavskiy),
	],
]);
