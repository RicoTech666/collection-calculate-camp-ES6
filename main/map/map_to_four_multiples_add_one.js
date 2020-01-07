"use strict";
var map_to_four_multiples_add_one = function(collection) {
  return collection.map(elem => {
    return 4 * elem + 1;
  });
};

module.exports = map_to_four_multiples_add_one;
