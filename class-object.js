// class and object
class Support {
  name;
  designation = "support web dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "Start a support session");
  }
}

const aamir = new Support("Äamir Khan", "BD");
const salman = new Support("Salman Khan", "Dubai");
const shahrukh = new Support("SR Khan", "China");

// console.log(aamir);
// console.log(salman);
aamir.startSession();
salman.startSession();

const players = [
  { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
  { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
  { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
  { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
];

const playersArr = players.map((player) => player.name.firstName);
console.log(playersArr);
