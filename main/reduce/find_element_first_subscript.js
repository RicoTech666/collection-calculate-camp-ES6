"use strict";

function calculate_elements_sum(collection, element) {
  var matchedSubArr = getMathcedSubArr(collection, element);

  return matchedSubArr[0];
}

function getMathcedSubArr(collection, element) {
  return collection.reduce(function(matchedSub, arrElem, index) {
    if (arrElem === element) {
      matchedSub.push(index);
    }
    return matchedSub;
  }, []);
}

module.exports = calculate_elements_sum;
