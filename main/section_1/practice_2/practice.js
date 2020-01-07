function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(elem => collection_b.flat().includes(elem));
}

module.exports = collect_same_elements;
