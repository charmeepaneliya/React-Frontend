//some()
let marks = [10, 20, 30, 40, 50, 60, 70];
const result = marks.some((mark) => mark > 60);
console.log("result", result);

//reverse()

console.log(marks.reverse());
console.log(marks);

//values()
let marks1 = marks.values();
console.log("makrks1", marks1);

for (key of marks1) {
  console.log(key);
}