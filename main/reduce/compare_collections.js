"use strict";

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce(function(isTheSameAccumulator, elem, index) {
    isTheSameAccumulator = isTheSameAccumulator && elem === collection_b[index];
    return isTheSameAccumulator;
  }, true);
}

module.exports = compare_collections;
