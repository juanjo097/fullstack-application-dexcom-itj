const getDuplicatesAndSum = require('../src/problem1');

describe(`Given a list nums of n integers where nums[i] is in the range [1, list length], write a function 
        that solves the following problem; return a list of all the integers in the range [1, list length]
        that do not appear in nums.`, () => {

    test("Testcase 1", () => {
        const expected_output = [4,6];
        const numbers = [4,2,7,8,3,1,2,3];
        const result = getDuplicatesAndSum(numbers)
        
        expect(result).toEqual(expect.arrayContaining(expected_output));
    });

    test("Testcase 2", () => {
        const expected_output = [2];
        const numbers = [1,1];
        const result = getDuplicatesAndSum(numbers)
        
        expect(result).toEqual(expect.arrayContaining(expected_output));
    });
})