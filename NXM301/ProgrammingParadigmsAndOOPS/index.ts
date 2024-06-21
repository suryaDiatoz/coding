// how you write class and constructors in typescript

type Gender = "Male" | "Female" | "Other"; // type alias // union types

// name, gender, aadhar_id, age
class Person {
  //  we have to define what are the keys and their types that can be used
  name: string;
  gender: Gender;
  aadhar_id: number;
  age: number;

  constructor(name: string, gender: Gender, aadhar_id: number, age: number) {
    this.name = name;
    this.gender = gender;
    this.aadhar_id = aadhar_id;
    this.age = age;
  }

  // adding a  method

  isMarriageable() {
    if (this.age < 21) return false;
    return true;
  }
}

const p = new Person("a", "Male", 1, 20);

console.log(p); //Person { name: 'a', gender: 'M', aadhar_id: 1, age: 20 }
console.log(p.isMarriageable()); // false
