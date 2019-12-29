"use strict";

function hybrid_operation(collection) {
  return collection.reduce(function(calculated, collectionElem, index) {
    if (0 !== index) {
      calculated += collectionElem * 3 + 2;
    }
    return calculated;
  }, collection[0] * 3 + 2);
}

console.log(hybrid_operation([1]));
module.exports = hybrid_operation;
