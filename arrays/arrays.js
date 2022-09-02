var grades = [
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99],
];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  console.log(total);
  total = 0;
}
