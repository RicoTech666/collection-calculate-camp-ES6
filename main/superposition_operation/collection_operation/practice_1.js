"use strict";

function hybrid_operation(collection) {
  return collection.reduce((calculated, collectionElem) => {
    calculated += collectionElem * 3 + 2;
    return calculated;
  }, 0);
}

module.exports = hybrid_operation;
