"use strict";

function get_integer_interval(number_a, number_b) {
  let allInterval = [];
  let leftNum = number_a;
  if (number_a < number_b) {
    while (leftNum <= number_b) {
      allInterval.push(leftNum);
      leftNum++;
    }
  } else if (number_a >= number_b) {
    while (leftNum >= number_b) {
      allInterval.push(leftNum);
      leftNum--;
    }
  }
  return allInterval;
}

module.exports = get_integer_interval;
