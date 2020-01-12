"use strict";

function collect_min_number(collection) {
  return collection.reduce((maxElem, elem) =>
    maxElem < elem ? maxElem : elem
  );
}

module.exports = collect_min_number;
