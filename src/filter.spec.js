const  filter = require('./filter');
describe('Filter',() => {

	test('Filter is true', () => {
		expect(filter([],"true")).toStrictEqual([]);
	});

	test('Filter is true', () => {
		expect(filter([1,2,3],"true")).toStrictEqual([1,2,3]);
	});

	test('Filter is false', () => {
		expect(filter([1,2,3],"false")).toStrictEqual([]);
	});

	test('Filter greater', () => {
		expect(filter([1,2,3],"greater")).toStrictEqual([2,3]);
	});

	test('filterUpperCase', () => {
		expect(filter(['a','B','c','D'],"filterUpperCase")).toStrictEqual(['B','D']);
	});
})