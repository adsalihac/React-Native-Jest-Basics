const {sum , sum3} = require('./sum');

// Common Matchers

describe('example of tests', () => {
    it('add 1 + 2 equal 3 ', () => {
        const result = sum(1, 2);
        expect(result).toEqual(3);
        expect(sum3(1, 2,3)).toBe(6);
    });

    it('object assignment', () => {
        const obj = {}
        expect(obj).toEqual({});
    });
});

//Truthiness

describe('truthly or  falsey', () => {
    test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });


    test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });
});

// numbers

describe('Numbers', () => {
    test('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);
        expect(value).toBeLessThan(5);
    });

    test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        // expect(value).toBe(0.3);
        expect(value).toBeCloseTo(0.299999);
    });

});


// Strings

describe('strings', () => {
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });
});


// Arrays

describe('arrays', () => {
    const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer'];
    expect(shoppingList).toContain('beer');
});

// Exceptions

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

describe('exeptions', () => {
    test('compiling android goes as expected', () => {
       expect(()=>compileAndroidCode()).toThrow(Error);
    });
});