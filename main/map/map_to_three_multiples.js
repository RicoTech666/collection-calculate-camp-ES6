"use strict";
var map_to_three_multiples = function(collections) {
  return collections.map(function(elem) {
    return 3 * elem;
  });
};

module.exports = map_to_three_multiples;
