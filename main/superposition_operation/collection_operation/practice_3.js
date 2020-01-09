"use strict";

function hybrid_operation_to_uneven(collection) {
  return collection.reduce((hybridSumOfOdd, collectionElem) => {
    if (0 !== collectionElem % 2) {
      hybridSumOfOdd += collectionElem * 3 + 5;
    }
    return hybridSumOfOdd;
  }, 0); //TODO: 与上个类似
}

module.exports = hybrid_operation_to_uneven;
