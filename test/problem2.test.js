const compareElementsTarget = require('../src/problem2');

describe(`Given a list of integers nums and an integer target, write a function that solves the following
        problem; return indices of the two numbers such that they add up to target.`, () => {

    test("Testcase 1", () => {
        const expected_output = [0,1];
        const numbers = [2,7,11,15];
        const target = 9;
        const result = compareElementsTarget(numbers, target)
        
        expect(result).toEqual(expect.arrayContaining(expected_output));
    });

    test("Testcase 2", () => {
        const expected_output = [1,2];
        const numbers = [3,2,4];
        const target = 6;
        const result = compareElementsTarget(numbers, target)
        
        expect(result).toEqual(expect.arrayContaining(expected_output));
    });


    test("Testcase 3", () => {
        const expected_output = [0,1];
        const numbers = [3,3];
        const target = 6;
        const result = compareElementsTarget(numbers, target)
        
        expect(result).toEqual(expect.arrayContaining(expected_output));
    });
})