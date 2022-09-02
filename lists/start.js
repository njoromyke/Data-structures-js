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

var names = new List();
names.append("Mike");
names.append("Jane");
names.append("Nick");
names.append("Ken");

console.log(names.toString());

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
