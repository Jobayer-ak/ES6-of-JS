// // filter() returns array if it matches then will return full element within an array.
// // if doesn't match, it will return an empty array.
// const numbers = [5, 13, 7, 41, 30, 5, 2, 19];

// const bigNumbers = numbers.filter((number) => number > 20);
// console.log(bigNumbers);

// const smallNumbers = numbers.filter((number) => number < 10);
// console.log(smallNumbers);

// const products = [
//   { name: "water bottle", price: 50, color: "yellow" },
//   { name: "mobile phone", price: 15000, color: "black" },
//   { name: "smart watch", price: 3000, color: "black" },
//   { name: "sticky note", price: 30, color: "pink" },
//   { name: "water glass", price: 100, color: "white" },
// ];

// const expensive = products.filter((product) => product.price > 100);
// console.log(expensive);

// const blacks = products.filter((product) => product.color == "green");
// console.log(blacks);

// // find() return only first element as an element if it matches. it doenst return an array
// const whiteItem = products.find((product) => product.color == "black");
// console.log(whiteItem);

// function min(nums) {
//   return Math.min(nums);
// }
// console.log(min([1, 3, 2]));
// const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);

// const { x, y, z } = { x: 1, y1: 2, z: 3 };
// console.log(y);

const nums = [1, 2, 3, 4, 5];
let output5 = nums.filter((n) => n % 2);

console.log(output5);

const person = [{ singer: "Atif aslam", address: "23 something street" }];

console.log(person[0].address);
