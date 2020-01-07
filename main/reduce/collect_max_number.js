"use strict";

function collect_max_number(collection) {
  return collection.reduce((maxElem, elem) => {
    return maxElem > elem ? maxElem : elem;
  });
}

module.exports = collect_max_number;
