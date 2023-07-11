
/**
 * function that receives array and use it to compare its elements to 
 * get duplicates and sum them if they are the same 
 * @param {*} arr 
 * @returns 
 */
const getDuplicatesAndSum = arr => {
    let duplicates = [];
    // iterate over array 
    for (let i = 0; i < arr.length; i++) {
    // iterate over the same array but taking the index of the first array as reference        
        for (let j = i + 1; j < arr.length; j++) {
            // comparing if values in array are the same, then push them into a new array
            // and sum them
            if (arr[i] === arr[j]) {
                duplicates.push(arr[i] + arr[j])
            }
        }
    }
    return duplicates;
}

module.exports = getDuplicatesAndSum