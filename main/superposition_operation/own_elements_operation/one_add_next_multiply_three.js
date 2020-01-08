"use strict";
function one_add_next_multiply_three(collection) {
  let computedArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (i <= collection.length - 2) {
      const currentElem = collection[i];
      const nextElem = collection[i + 1];
      computedArr.push((currentElem + nextElem) * 3);
    }
  }
  return computedArr;
}
module.exports = one_add_next_multiply_three;
