"use strict";

function hybrid_operation(collection) {
  return collection.reduce((calculated, collectionElem) => {
    calculated += collectionElem * 3 + 2;
    return calculated;
  }, 0);
  //TODO: collection.map((item) => item * 3 + 2).reduce((pre, cur) => pre + cur);
}

module.exports = hybrid_operation;
