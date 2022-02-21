//Task 3.1:
const arrowFunction = (num) => num / 5;
console.log(arrowFunction(10));

// Task 3.2
const multiplyFunc = (num1, num2) => (num1 + 2) * (num2 + 2);

console.log(multiplyFunc(2, 2));

// task 3.3
const onlyMultiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(onlyMultiply(2, 3, 4));

// task 5. array.map()
const numbers = [10, 5, 9, 7, 20, 12, 15, 21];
const fiveArrResult = numbers.map((result) => result * 5);
// console.log(fiveArrResult);

// task 6.
const oddArray = numbers.filter((number) => number % 2 == 1);
console.log(oddArray);

// task 7.
const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 100, color: "white" },
];

const prices = products.find((product) => product.price == 3000);
console.log(prices);

// task 8.
// map() => map array er protita element k loop through kore then new array return kore
// filter() => filter return kore full element ekta array er majhe jodi condition true hoi r jodi false hoi tahole empty array return kore.
// find() => find return kore only matched element r jodi eker odhik mathced hoi tahole first mathced element return korbe but not array
