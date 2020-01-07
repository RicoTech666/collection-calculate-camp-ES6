"use strict";

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(elem => collection_a.includes(elem));
}

module.exports = get_intersection;
