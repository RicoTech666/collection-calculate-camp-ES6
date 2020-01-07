function collect_same_elements(collection_a, object_b) {
  const collectionB = object_b["value"];
  return collection_a.filter(elem => collectionB.includes(elem));
}

module.exports = collect_same_elements;
