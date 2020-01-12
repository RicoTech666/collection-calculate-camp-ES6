"use strict";

function hybrid_operation_to_uneven(collection) {
  return collection.filter(val => val % 2).map(val => val * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;
