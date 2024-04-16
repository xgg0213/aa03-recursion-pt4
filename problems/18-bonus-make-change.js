/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive function that will find the best way to make change from a
given set of coin values for a given amount of money. The set of coin values
should default to using pennies (1 cent), nickels (5 cents), dimes (10 cents),
and quarters (25 cents). Return `null` if there are no possible ways to make
change for the given target amount.

Examples:

makeChange(21); // [1, 10, 10]
makeChange(75); // [25, 25, 25]
makeChange(33, [15, 3]); // [3, 15, 15]
makeChange(34, [15, 3]); // null
makeChange(24, [10, 7, 1]) // [7, 7, 10]

Here's a game plan for solving the problem:

First, write a 'greedy' version called `greedyMakeChange`:

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

To `makeBetterChange`, we only take one coin at a time and never rule out
denominations that we've already used. This allows each coin to be available
each time we get a new remainder. By iterating over the denominations and
continuing to search for the best change, we assure that we test for
'non-greedy' uses of each denomination.

Discuss the following game plan and then work together to implement your
new method:

- Iterate over each coin.
- Grab only one of that one coin and recursively call `makeBetterChange` on the
  remainder using coins less than or equal to the current coin.
- Add the single coin to the change returned by the recursive call. This will be
  a possible solution, but maybe not the best one.
- Keep track of the best solution and return it at the end.
// best solution refers to the solution with the shortest array

N.B. Don't generate every possible permutation of coins and then compare them.
Remember that a permutation is not the same thing as a combination - we will
need to check every combination of coins that add up to our target, we just
don't want to check the same combination in different orders. If you get stuck
you can start by writing a solution that calculates and compares all of the
permutations without storing them in an array. Then go back and refactor your
solution so that it only calculates and compares all of the different
combinations.
***********************************************************************/

function makeBetterChange(target, coins = [25, 10, 5, 1]) {
  // Your code here 
  // edge case:
  // 1. target < 0 => returns null
  // 2. target < 3 => returns null
  // 3. ultimately, if target < min(coins) => returns null
  // 4. no combination adds up to target value => returns null


  // initial target 74
  // step 1: - coins[0] => new target is 49
  // step 2: with target = 49, - coins[0] => new target is 24
  // step 3: with target = 24, - coins[0] => new target is -1
  // notes
  // 1. base case (target === 0) 
  // 2. recursive step (where to recurse) 
  // 3. if "largest coin" is best coin, then add it to the result array, and call the function recursively again 
  // 4. check your results and ensure that it is the best output for the given problem
  // 5. does decreasing/ascending order matter? Why/Why not?
  // 6. there needs to be another wrapper to ensure all the potential combinations are stored
  // essence is to understand how recursion works
  // potential practice for recursion: free code camp

  let res = [];

  for (let i = 0; i < coins.length; i++) {
    if (target >= coins[i]) {
      target -= coins[i];
      res.push(coins[i]);
      if (target === 0) {
        return res;
      } 
      // else if (target < 1) return null ;
      else return makeBetterChange(target, coins.slice(i));
    }

  return null;


}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeBetterChange
} catch (e) {
  module.exports = null;
}
