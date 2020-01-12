"use strict";
function one_add_next_multiply_three(collection) {
  let computedArr = [];
  collection.forEach((currentElem, index, arr) => {
    if (index <= collection.length - 2) {
      computedArr.push((currentElem + arr[index + 1]) * 3);
    }
  });
  return computedArr;
}
module.exports = one_add_next_multiply_three;
