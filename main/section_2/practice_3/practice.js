function count_same_elements(collection) {
  let countedObjFromCollection = countArrToObj(collection);
  return countObjToObjArray(countedObjFromCollection);
}

function countArrToObj(arr) {
  return arr.reduce((allElems, elem) => {
    if (elem in allElems) {
      allElems[elem]++;
    } else if (isDash(elem)) {
      let dashArr = processDash(elem);
      if (dashArr[0] in allElems) {
        allElems[dashArr[0]] += parseInt(dashArr[1]);
      } else {
        allElems[dashArr[0]] = parseInt(dashArr[1]);
      }
    } else if (isBrackets(elem)) {
      let bracketsArr = processBrackets(elem);
      if (bracketsArr[0] in allElems) {
        allElems[bracketsArr[0]] += parseInt(bracketsArr[1]);
      } else {
        allElems[bracketsArr[0]] = parseInt(bracketsArr[1]);
      }
    } else if (isColon(elem)) {
      let colonArr = processColon(elem);
      if (colonArr[0] in allElems) {
        allElems[colonArr[0]] += parseInt(colonArr[1]);
      } else {
        allElems[colonArr[0]] = parseInt(colonArr[1]);
      }
    } else {
      allElems[elem] = 1;
    }
    return allElems;
  }, {});
}

function isDash(str) {
  return -1 !== str.indexOf("-");
}

function isBrackets(str) {
  return -1 !== str.indexOf("[");
}

function isColon(str) {
  return -1 !== str.indexOf(":");
}

function processDash(str) {
  return str.split("-");
}

function processBrackets(str) {
  return [str[0], str.match(/\d+/)[0]];
}

function processColon(str) {
  return str.split(":");
}

function countObjToObjArray(countedObj) {
  let objArray = [];
  for (let key in countedObj) {
    objArray.push({ name: key, summary: countedObj[key] });
  }
  return objArray;
}

module.exports = count_same_elements;
