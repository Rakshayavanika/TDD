const  reduce = require('./reduce');
describe('Reduce',() => {

	test('Reduce', () => {
		expect(reduce(['a','b','c'])).toStrictEqual("abc");
	});

	
})