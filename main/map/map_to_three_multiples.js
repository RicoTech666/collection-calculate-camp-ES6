"use strict";
var map_to_three_multiples = function(collections) {
  return collections.map(elem => {
    return 3 * elem; // TODO：直接箭头函数，不需要return
  });
};

module.exports = map_to_three_multiples;
