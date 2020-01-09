"use strict";

function amount_even(collection) {
  return collection.reduce((sumEven, collectionElem) => {
    if (0 === collectionElem % 2) {
      sumEven += collectionElem;
    }
    return sumEven;
  }, 0); //TODO: 与上个类似
}

module.exports = amount_even;
