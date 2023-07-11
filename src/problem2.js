/**
 * function that receives array and use it to compare its elements to 
 * get duplicates and sum them if they are the same 
 * @param {*} arr 
 * @returns 
 */
const compareElementsTarget = (arr, target) => {
    // iterate over array 
    for (let i = 0; i < arr.length; i++) {
    // iterate over the same array but taking the index of the first array + 1 as reference        
        for (let j = i + 1; j < arr.length; j++) {
            // compare the sum of elements is equals to target
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }
}

const expected_output = [0,1];
const numbers = [3,3];
const target = 6;
console.log(compareElementsTarget(numbers, target));

module.exports = compareElementsTarget