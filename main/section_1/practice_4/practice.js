function collect_same_elements(collection_a, object_b) {
  const collectionA = collection_a.map(currentObj => currentObj.key);
  const collectionB = object_b["value"];

  return collectionA.filter(elem => collectionB.includes(elem));
}

module.exports = collect_same_elements;
