const tail = require('./tail');
describe('Tail',() => {

	test('Tail of an Array', () => {
		var a = [2,3,4];
		expect(tail([1,2,3,4])).toEqual(a);
	});

	test('Tail of an Array', () => {
		expect(tail([])).toBe("null");
	});
})