"use strict";

function calculate_elements_sum(collection, element) {
  return (
    (collection.length-1) - collection.reverse().findIndex(elem => elem === element)
  );
}

module.exports = calculate_elements_sum;
