function create_updated_collection(collection_a, object_b) {
  let collectionACounted = count_same_elements(collection_a);
  for (let i = 0; i < collectionACounted.length; i++) {
    for (let j = 0; j < object_b.value.length; j++) {
      if (collectionACounted[i].key === object_b.value[j]) {
        collectionACounted[i].count -= Math.floor(
          collectionACounted[i].count / 3
        );
      }
    }
  }
  return collectionACounted;
}

function count_same_elements(collection) {
  let countedObjFromCollection = countArrToObj(collection);
  let objArrayDashTransferred = transferDashNumberToValue(
    countedObjFromCollection
  );
  return countObjToObjArray(objArrayDashTransferred);
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

function transferDashNumberToValue(objNeedToBeTransferred) {
  let arrObj = objNeedToBeTransferred;
  for (let key in arrObj) {
    if (-1 !== key.indexOf("-")) {
      let newKey = key.split("-")[0];
      let newValue = key.split("-")[1];
      delete arrObj[key];
      arrObj[newKey] = parseInt(newValue);
    }
  }
  return arrObj;
}

function countObjToObjArray(countedObj) {
  let objArray = [];
  for (let key in countedObj) {
    objArray.push({ key: key, count: countedObj[key] });
  }
  return objArray;
}

module.exports = create_updated_collection;
