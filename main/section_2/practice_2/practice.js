function count_same_elements(collection) {
  var countedObjFromCollection = countArrToObj(collection);
  var objArrayDashTransferred = transferDashNumberToValue(
    countedObjFromCollection
  );
  return countObjToObjArray(objArrayDashTransferred);
}

function countArrToObj(arr) {
  return arr.reduce(function(allElems, elem) {
    if (elem in allElems) {
      allElems[elem]++;
    } else {
      allElems[elem] = 1;
    }
    return allElems;
  }, {});
}

function transferDashNumberToValue(objNeedToBeTransferred) {
  var arrObj = objNeedToBeTransferred;
  for (var key in arrObj) {
    if (-1 !== key.indexOf("-")) {
      var newKey = key.split("-")[0];
      var newValue = key.split("-")[1];
      delete arrObj[key];
      arrObj[newKey] = parseInt(newValue);
    }
  }
  return arrObj;
}

function countObjToObjArray(countedObj) {
  var objArray = [];
  for (var key in countedObj) {
    objArray.push({ key: key, count: countedObj[key] });
  }
  return objArray;
}

module.exports = count_same_elements;
