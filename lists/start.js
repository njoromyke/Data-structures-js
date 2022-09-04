function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}

// Append:Adding an element to a l ist
function append(element) {
  this.dataStore[this.listSize++] = element;
}

// FInding an element
function find(element) {
  for (i = o; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i;
    }
    return -1;
  }
}

// Remove element

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
  }
  return false;
}

// Determing the length
function length() {
  return this.listSize;
}

// toString: Retrieving a lists elements

function toString() {
  return this.dataStore;
}

// Inserting Elements

function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

// Clear
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

// Contains: Determining if a given value is in a list

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) return true;
  }

  return false;
}

// traversing a list
function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) --this.pos;
}

function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  return (this.pos = position);
}
function getElement() {
  return this.dataStore[this.pos];
}

var names = new List();
names.append("Mike");
names.append("Ben");
names.append("Jane");
names.append("Ann");
names.append("Shikoh");
names.append("Nancy");

// move to first element
names.front();

console.log(names.getElement(), "first element");
// next element
names.next();
console.log(names.getElement(), "Next element");

// move formward twice and backward once
names.next();
names.next();
names.prev();
console.log(names.getElement(), "Forward twice and backward once");

// Iterators
// An iterator allows us to traverse a list without referencing the internal storage mecha‐
// nism of the List class. The functions front() , end() , prev() , next() , and currPos
// provide an implementation of an iterator for our List class. Some advantages to using
// iterators over using array indexing include:
// • Not having to worry about the underlying data storage structure when accessing
// list elements
// • Being able to update the list and not having to update the iterator, where an index
// becomes invalid when a new element is added to the list
// • Providing a uniform means of accessing elements for different types of data stores
// used in the implemenation of a List class

// for (names.front(); names.currPos() < names.length(); names.next()) {
//   console.log(names.getElement());
// }

// We can also traverse a list backward using an iterator. Here is the code:
for (names.end(); names.currPos() >= 0; names.prev()) {
  console.log(names.getElement());
}
