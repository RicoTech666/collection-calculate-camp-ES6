"use strict";

function collect_min_number(collection) {
  return collection.reduce((maxElem, elem) => {
    return maxElem < elem ? maxElem : elem; // TODO：直接箭头函数，不需要return
  });
}

module.exports = collect_min_number;
