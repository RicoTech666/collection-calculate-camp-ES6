"use strict";

function hybrid_operation(collection) {
  return collection.map(item => item * 3 + 2).reduce((pre, cur) => pre + cur);
}

module.exports = hybrid_operation;
