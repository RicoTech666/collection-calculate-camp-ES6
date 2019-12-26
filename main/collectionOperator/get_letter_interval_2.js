"use strict";

function get_letter_interval_2(number_a, number_b) {
  var letterInterval = [];
  var letterLoopNum = 26;
  if (number_a <= number_b) {
    for (var i = number_a; i <= number_b; i++) {
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
  } else if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
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
  }
  return letterInterval;
}

module.exports = get_letter_interval_2;
