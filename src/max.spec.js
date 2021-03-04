const max = require('./max');

describe('Max', () => {

    test('Maximum of an Array', () => {
		expect(max([1,2,3,4])).toBe(4);
	});

})

