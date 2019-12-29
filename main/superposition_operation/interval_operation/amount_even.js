"use strict";

function amount_even(collection) {
  return collection.reduce((sumEven, collectionElem) => {
    if (0 === collectionElem % 2) {
      sumEven += collectionElem;
    }
    return sumEven;
  }, 0);
}

module.exports = amount_even;
