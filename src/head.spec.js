const head = require('./head');
describe('Head',() => {

	test('Head of an Array', () => {
		expect(head([1,2,3])).toBe(1);
	});

	test('Head of an Array', () => {
		expect(head([])).toBe("null");
	});
})