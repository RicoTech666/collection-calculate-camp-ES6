"use strict";

function calculate_elements_sum(collection, element) {
  var matchedSubArr = getMatchedSubArr(collection, element);
  return matchedSubArr[matchedSubArr.length - 1];
}

function getMatchedSubArr(collection, element) {
  return collection.reduce(function(matchedSub, arrElem, index) {
    if (arrElem === element) {
      matchedSub.push(index);
    }
    return matchedSub;
  }, []);
}

module.exports = calculate_elements_sum;
