"use strict";

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(elem => collection_b.includes(elem));
}

module.exports = choose_common_elements;
