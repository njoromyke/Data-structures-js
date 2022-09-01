function weekTemps() {
  this.dataStore = [];
  this.add = add;
  this.average = average;
}

function add(temp) {
  this.dataStore.push(temp);
}

function average() {
  var total = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
  }
  return total / this.dataStore.length;
}

var thisWeek = new weekTemps();

thisWeek.add(45);
thisWeek.add(60);
thisWeek.add(43);
console.log(thisWeek.average());
