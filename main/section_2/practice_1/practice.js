function count_same_elements(collection) {
  let countedObjFromCollection = countArrToObj(collection);
  return countObjToObjArray(countedObjFromCollection);
}

function countArrToObj(arr) {
  return arr.reduce((allElems, elem) => {
    if (elem in allElems) {
      allElems[elem]++;
    } else {
      allElems[elem] = 1;
    }
    return allElems;
  }, {});
}

function countObjToObjArray(countedObj) {
  let objArray = [];
  for (let key in countedObj) {
    objArray.push({ key: key, count: countedObj[key] });
  }
  return objArray;
}

module.exports = count_same_elements;
