"use strict";
function map_to_even(collection) {
  return collection.map(elem => {
    return 2 * elem; // TODO：可简写，直接箭头函数，不需要return
  });
}
module.exports = map_to_even;
