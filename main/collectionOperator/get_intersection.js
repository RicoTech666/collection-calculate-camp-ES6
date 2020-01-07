"use strict";

function get_intersection(collection_a, collection_b) {
  let setA = new Set(collection_a);
  let setB = new Set(collection_b);
  return [...setB].filter(elem => setA.has(elem));
}

module.exports = get_intersection;
