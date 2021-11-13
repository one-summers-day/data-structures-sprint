var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fixed to empty array (instead of null)
  return set;
};
// should not contain duplicate values
var setPrototype = {};

setPrototype.add = function(item) {
  //only add new elements if it is not already present
  if (!this.contains(item)) {
    this._storage.push(item)
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item) // returns a boolean depending on whether item is included
};

setPrototype.remove = function(item) {
  //Get an index of the item we would like to remove
  let itemIndex = this._storage.indexOf(item);

  //Splice one item at itemIndex in _storage
  this._storage.splice(itemIndex, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
  add : O(N) >> uses contains, which uses includes(), which is O(N)
  contains : O(N)
  remove : O(N) >> uses indexOf
 */
