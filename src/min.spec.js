const min = require('./min');

describe('Min', () => {

    test('Minimum of an Array', () => {
		expect(min([1,2,3,4])).toBe(1);
	});

})

