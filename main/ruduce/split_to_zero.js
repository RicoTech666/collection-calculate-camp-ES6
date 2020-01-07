"use strict";

function spilt_to_zero(number, interval) {
  const isZero = canBeSplitToZero(number, interval);
  return generateSplittedArr(number, interval, isZero);
}

function canBeSplitToZero(number, interval) {
  const numberInt = toInt(number);
  const intervalInt = toInt(interval);
  return 0 === numberInt % intervalInt;
}

function generateSplittedArr(number, interval, canBeSplitedToZero) {
  let splittedArr = [];
  let numberInt = toInt(number);
  const intervalInt = toInt(interval);
  if (canBeSplitedToZero) {
    while (numberInt >= 0) {
      splittedArr.push(toFloat(numberInt));
      numberInt -= intervalInt;
    }
  } else {
    while (numberInt > -intervalInt) {
      splittedArr.push(toFloat(numberInt));
      numberInt -= intervalInt;
    }
  }
  return splittedArr;
}

function toInt(num) {
  return parseInt(num.toString().split(".")[1]);
}

function toFloat(num) {
  if (num >= 0) {
    return parseFloat("0." + num.toString());
  } else {
    return parseFloat("-0." + (-num).toString());
  }
}

module.exports = spilt_to_zero;
