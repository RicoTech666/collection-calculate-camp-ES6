"use strict";

function calculate_elements_sum(collection) {
  return collection.reduce((sumOfArr, elem) => {
    return (sumOfArr = sumOfArr + elem);
  });
}

module.exports = calculate_elements_sum;
