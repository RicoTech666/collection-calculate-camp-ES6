"use strict";

function get_letter_interval_2(number_a, number_b) {
  let letterInterval = [];

  if (number_a <= number_b) {
    letterInterval = getLettersIncre(number_a, number_b);
  } else if (number_a > number_b) {
    letterInterval = getLettersIncre(number_b, number_a).reverse();
  }
  return letterInterval;
}

function getLettersIncre(leftNum, rightNum) {
  let letterInterval = [];
  let letterLoopNum = 26;
  for (let i = leftNum; i <= rightNum; i++) {
    if (i <= letterLoopNum) {
      letterInterval.push(String.fromCharCode(i + 96));
    } else if (i <= letterLoopNum * 2) {
      letterInterval.push("a" + String.fromCharCode(i - letterLoopNum + 96));
    } else if (i <= letterLoopNum * 3) {
      letterInterval.push(
        "b" + String.fromCharCode(i - letterLoopNum * 2 + 96)
      );
    }
  }
  return letterInterval;
}

module.exports = get_letter_interval_2;
