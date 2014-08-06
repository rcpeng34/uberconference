/*
Promp: Stakeout

Congratulations!  You are the new elite hacker in a group of villainous ne'er-do-wells.
Luckily this group is more saavy than your last band of ruffians, 
and they are looking to software (and you) to improve their take. 
The con man for the team, has gone door-to-door down each street 
posing as a termite inspector so he could covertly total the valuable goods in each house. 
Normally the gang would just rob all the valuable homes, but there's a catch!
Whenever a house is robbed in this wealthy neighborhood, 
the police watch it and the neighboring houses for months.

So the gang can't simply rob all the homes, and if they choose to rob one, 
they can no longer rob the house on either side of it.

The ringleader wants to know what houses he should rob to maximize the team's profit, and he wants to know now. 
Write a function that takes in an array of positive integers (home values) and returns the maximum expected value of robbing that street.

For example:

[ 20, 10, 50, 5, 1 ] should return $71, as robbing the first, third, and fifth houses is optimal [ 20, x, 50, x, 1 ]

[ 20, 50, 10, 1, 5 ] should return $55, as robbing the second and fifth houses is optimal [ x, 50, x, x, 5 ]

-----------

stakeout takes an array of values and returns the maximum sum possible given that numbers in the sum cannot be in indices next to each other
e.g. a sum cannot be made up of values at index 1, 5, 7, and 8

--
Input
  houseArray should be an array of numbers
--
Returns
  stakeout should return a number representing the highest possible sum
--
*/

'use strict';

var stakeout = function (houseArray) {

  var sumArray = [];
  // normalize input so negative values are 0
  // since the function only needs to return the greatest possible sum, negative values are not added and can be considered 0
  for (var i = 0; i < houseArray.length; i++){
    if (houseArray[i] < 0) {
      houseArray[i] = 0;
    }
  }

  while (houseArray.length < 4) {
    houseArray.push(0);
  }

  sumArray[0] = houseArray[0];
  sumArray[1] = houseArray[1];
  sumArray[2] = houseArray[0] + houseArray[2];

  // because negative values are ignored, the greatest possible sum for indices 0 to x is greater than or equal to
  // the greatest possible sum for indices 0 to x-3 or 0 to x-2 since if houseArray[x] > 0, it can be added to those sums
  // index x will never be added to the greatest sum of 0 to x-4 as that sum is less than or equal to 0 to x-2

  for (var i = 3; i < houseArray.length; i++){
    if (sumArray[i-2] > sumArray[i-3]){
      sumArray[i] = sumArray[i-2] + houseArray[i];
    } else {
      sumArray[i] = sumArray[i-3] + houseArray[i];
    }
  }

  if (sumArray[sumArray.length - 1] > sumArray[sumArray.length - 2]){
    return sumArray[sumArray.length - 1];
  } else {
    return sumArray[sumArray.length - 2];
  }
};

if (typeof module !== 'undefined') {
  module.exports = stakeout;
}

