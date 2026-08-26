//some()
let marks = [29, 46, 36, 40, 30, 55, 70];
const result = marks.some((mark) => mark > 55);
console.log("result", result);

let age = [12,15,18,21,25];
const result2 = age.some((age) => age > 55);
console.log("result2", result2);

//reverse()

console.log(marks.reverse());
console.log(marks);

let numbers = [10,20,30,40,50];
console.log(numbers.reverse());

//values()
let marks1 = marks.values();
console.log("makrks1", marks1);

for (key of marks1) {
  console.log(key);
}


let fruits = ["apple","mango","banana","orange"];
let fruitsValues = fruits.values();
console.log("fruits",fruits);

for (let fruit of fruitsValues) {
  console.log(fruit);
}


//indexOf

console.log(fruits.indexOf("mango"));
console.log(fruits.indexOf("orange"));

//includes
fruits = ["apple","lichi","graps","orange"];
console.log("includes",fruits.indexOf("lichi"));
console.log("includes",fruits.indexOf("banana"));

//sort()

let letters = ["d","a","c","b"];
console.log(letters.sort()); //[ 'a', 'b', 'c', 'd' ]

let num = [5,2,4,3,1];
console.log(num.sort()); //[ 1, 2, 3, 4, 5 ]

//desending order

console.log(num.sort((a,b)=>(b-a))); //[ 5, 4, 3, 2, 1 ]

//asending

console.log(num.sort((a,b)=>(a-b))); //[ 1, 2, 3, 4, 5 ]

//filter

numbers = [10,20,30,40,50];

let result3 = numbers.filter((num)=>num>20);

console.log(result3); //[ 30, 40, 50 ]

//map

let result4 = numbers.map((num)=>num*2);

console.log(result4); //[ 20, 40, 60, 80, 100 ]

//reduce

let result5 = numbers.reduce((acc,curr)=>acc+curr,0);
console.log(result5); //150