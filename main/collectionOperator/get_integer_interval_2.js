"use strict";

function get_integer_interval_2(number_a, number_b) {
  let evenInterval = [];
  if (number_a <= number_b) {
    let leftNum = 0 === number_a % 2 ? number_a : number_a + 1;
    while (leftNum <= number_b) {
      evenInterval.push(leftNum);
      leftNum += 2;
    }
  } else {
    let leftNum = 0 === number_a % 2 ? number_a : number_a - 1;
    while (leftNum >= number_b) {
      evenInterval.push(leftNum);
      leftNum -= 2;
    }
  }
  return evenInterval;
}

module.exports = get_integer_interval_2;
