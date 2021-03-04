const  map = require('./map');
describe('Map',() => {

	test('Map', () => {
		var a=map([1,2,3,4],"cube");
		var b=[1,8,27,64];
		expect(a).toStrictEqual(b);
	});

	test('Map', () => {
		expect(map([],"")).toStrictEqual([]);
	});

	test('Map', () => {
		var id=map([1,2,3,4],"identity");
		var b=[1,2,3,4];
		expect(id).toStrictEqual(b);
	});

	test('Map', () => {
		expect(map([{x : 10}],"increment")).toStrictEqual([11]);
	});
})