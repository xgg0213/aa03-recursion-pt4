/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
    // Your code here 
    if (nums.length === 0) return sorted;

    let min = Infinity;
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];
        if (el < min) {
            min = el;
            index = i;
        }
    }
    sorted.push(min);

    nums = nums.slice(0,index).concat(nums.slice(index+1))

    return sort(nums,sorted=sorted);
    
    
}

console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7])

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
