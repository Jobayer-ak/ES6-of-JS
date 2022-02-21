const numbers = [4, 6, 8, 10];

const output2 = [];

const doubleIt = (number) => number * 2;

for (const number of numbers) {
  const result = doubleIt(number);
  output2.push(result);
}
// console.log(output2);

// console.log(doubleIt(3));

//
// const output = numbers.map(doubleIt);
// const output = numbers.map((number) => number * 2);
const output = numbers.map((number) => number * number);
// console.log(output);

// More map() return an array after processing
// 1. protita element k loop through korbe
// 2. must return korbe array
const friends = ["Tom Hanks", "Tom Cruise", "Tom Jordans"];

const fLength = friends.map((friend) => friend.length);
// console.log(fLength);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 100, color: "white" },
];

const productNames = products.map((product) => product.name);
console.log(productNames);
const productPrices = products.map((product) => product.price);
console.log(productPrices);
// products.map((product) => console.log(product));

//forEach() doesn't return an array after processing
// 1. protita element k loop through korbe
// 2. kichu return korbena
console.log("For Each: ");
products.forEach((product) => console.log(product));
