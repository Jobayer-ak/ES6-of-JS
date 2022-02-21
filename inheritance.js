class TeamMember {
  name;
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}
// class
class Support extends TeamMember {
  groupSupportTime;
  constructor(name, address, time) {
    super(name, address);
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, "Start a support session");
  }
}

class StudentCare extends TeamMember {
  designation = "Care Web Dev";
  buildARoutine(student) {
    console.log(this.name, "Build a routine for", student);
  }
}

const hamid = new StudentCare("hamid", "India");
// console.log(hamid);

class NeptuneDev extends TeamMember {
  codeEditor;
  designation = "Neptune App Dev";
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApp(student) {
    console.log(this.name, "release app version", student);
  }
}

//creating object
const amir = new Support("amir", "BD", "11.00am");
console.log(amir);
const alia = new StudentCare("Alia Bhatt", "Mumbai");
console.log(alia);
const salman = new NeptuneDev("Salman Khan", "Chennai", "Android Studio");
console.log(salman);
salman.releaseApp("1.4.5");
