"use strict";

function grouping_count(collection) {
  return collection.reduce((groupCount, elem) => {
    if (elem in groupCount) {
      groupCount[elem]++;
    } else {
      groupCount[elem] = 1;
    }
    return groupCount;
  }, {});
}

module.exports = grouping_count;
