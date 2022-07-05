

describe('animals array', () => {

    let animals = ['cat', 'dog', 'bird'];


    beforeAll(() => {
        console.log("before All");
    });

    beforeEach(() => {
        console.log("before Each");
    });

    afterEach(() => {
        console.log("afterEach");
        animals = ['cat', 'dog', 'bird'];
    });

    afterAll(() => {
        console.log("after All");
    });


    test('should add animal to end of array', () => {
        animals.push('fish');
        expect(animals[animals.length - 1]).toBe('fish');
    });

    test('should add animal to beginning of array', () => {
        animals.unshift('monkey');
        expect(animals[0]).toBe('monkey');
    });

    test('should have initial length of 3', () => {
        expect(animals.length).toBe(3);
    });

});


// describe('testing sometimg else', () => {
//     test.only('true should be truthly', () => {
//         expect(true).toBeTruthy();
//     });
// });