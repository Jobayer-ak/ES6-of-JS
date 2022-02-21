const fish = {
  id: 58,
  name: "King Hilsha",
  price: 9000,
  phone: "01725008757",
  address: "Chandpur",
  dress: "Silver",
};
// destructuring object
const { phone, name, price, address, dress, id } = fish;

// console.log(address);
// console.log(phone);

//
const company = {
  name: "GP",
  ceo: { id: 1, name: "Ajmol", food: "fuchka" },
  web: {
    work: "website development",
    employee: 22,
    framework: "react",
    tech: {
      first: "html",
      second: "css",
      third: "js",
    },
  },
};

// const work = company.web.work;
// console.log(work);

const { work, framework } = company.web;
const { food } = company.ceo;
const { first, second, third } = company.web.tech;
console.log(work, framework, second);
console.log(food);
