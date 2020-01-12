"use strict";

function collect_max_number(collection) {
  return collection.reduce((maxElem, elem) =>
    maxElem > elem ? maxElem : elem
  );
}

module.exports = collect_max_number;
