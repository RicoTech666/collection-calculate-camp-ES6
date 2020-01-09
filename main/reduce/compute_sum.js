"use strict";

function calculate_elements_sum(collection) {
  return collection.reduce((sumOfArr, elem) => {
    return (sumOfArr = sumOfArr + elem); // TODO：不需要sumOfArr =
  });
}

module.exports = calculate_elements_sum;
