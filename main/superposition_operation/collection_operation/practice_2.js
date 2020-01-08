"use strict";

function hybrid_operation_to_uneven(collection) {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if (0 !== collection[i] % 2) {
      result.push(collection[i] * 3 + 2);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;
