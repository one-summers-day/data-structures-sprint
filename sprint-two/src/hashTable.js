var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

/*
index (hash) - address
  bucket - LimitedArray [item1, item2]
    item1 - LimitedArray [k, v]
    item2

index (hash)
  bucket

index (hash)
  bucket
*/

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    // create empty bucket
    let myRedBucket = LimitedArray(this._limit);

    // create item to be inserted into bucket
    let myKeyValuePair = LimitedArray(this._limit);
    myKeyValuePair.set(0, k);
    myKeyValuePair.set(1, v);

    // insert item into bucket
    myRedBucket.set(0, myKeyValuePair);

    // put bucket at index
    this._storage.set(index, myRedBucket);
  } else if (this._storage.get(index) !== null) {
    // this._storage(access myRedBucket somehow).push([k, v])
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // 1. Grab myRedBucket using index using .get()
  var thisRedBucket = this._storage.get(index);
  if (thisRedBucket === undefined) {
    return undefined;
  }// this._storage.get(index)
  // 2. Use each() in conjunction with a custom written function to return myRedBucket.container[1] iff myRedBucket.container[0] === key (can't actually access container, but the idea is there)
  var pleaseReturnThis;
  thisRedBucket.each(function(i) {
    if (i.get(0) === k) {
      pleaseReturnThis = i.get(1);
      return;
    }
  });

  return pleaseReturnThis;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // 1. Grab myRedBucket using index using .get()
  var thisRedBucket = this._storage.get(index);
  if (thisRedBucket === undefined) {
    return undefined;
  }// this._storage.get(index)
  // 2. Use each() in conjunction with a custom written function to return myRedBucket.container[1] iff myRedBucket.container[0] === key (can't actually access container, but the idea is there)
  thisRedBucket.each(function(i) {
    if (i.get(0) === k) {
      pleaseReturnThis = i.get(1);
      return;
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var testHash = new HashTable();