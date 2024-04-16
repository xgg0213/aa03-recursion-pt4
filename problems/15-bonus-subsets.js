/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  // Your code here 
  // let res = [[]];
  // if (arr.length === 0) return res;

  // consider the deep dup logic where the iteration of each element is contained within a layer
  // so that we can visit each element while constructing an outermost array (the result)
  // let el = arr.pop(); 
  // hints: 1. keep the last element;
  // hints: 2. keep track of the last element
  // create a new array each time
  // arr.pop = the last element of an array; 
  // newArr = arr.slice(1) keeps partial array and creates a new array (a shallow copy)
  // 

  // if (arr.length !== 0) [el].concat(subsets(arr));
  // else res.push([el]);
  
  // return res;

    if (arr.length === 0) return [[]]; // base
  
    let el = arr.slice(-1)
    let prev = subsets(arr.slice(0, -1))
    return prev.concat(prev.map(x => x.concat(el)));  

}

// console.log(subsets([])) // [[]]
// console.log(subsets([1])) // [[], [1]]
debugger
console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
//console.log(subsets([1,2,3]))

// let arr = [1,2,3]
// console.log(arr.slice(0,-1))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
