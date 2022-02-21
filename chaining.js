// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log(b);
console.log("myObject.p", myObject?.p?.q); // ? means optional chaining if it is true, move furthur

// destructuring array
const [p, q] = [45, 37, 50, 60]; // variable get value position wise
console.log(p, q);
