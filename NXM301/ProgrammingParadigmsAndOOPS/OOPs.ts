/*
class Vehicle {
  engine: string;
  wheel: number;

  constructor(engine: string, wheel: number) {
    this.engine = engine;
    this.wheel = wheel;
  }
}

*/

// abstract class Vehicle {
//   engine: string;
//   wheel: number;

//   constructor(engine: string, wheel: number) {
//     this.engine = engine;
//     this.wheel = wheel;
//   }
// }

// this is inheritence ,(extends wala part is inheritence)

// This is inheritance (extends part is inheritance)
// class Car extends Vehicle {
//   isAC: boolean;
//   price: number;

//   constructor(engine: string, wheel: number, isAC: boolean, price: number) {
//     super(engine, wheel); // This super method is the constructor of parent class, here parent class is `Vehicle`
//     this.isAC = isAC;
//     this.price = price;
//   }
// }

// // this is inheritence ,(extends wala part is inheritence)
// class Bus extends Vehicle {
//   no_of_seats: number;
//   ticket: number;

//   constructor(
//     engine: string,
//     wheel: number,
//     no_of_seats: number,
//     ticket: number
//   ) {
//     super(engine, wheel);

//     this.no_of_seats = no_of_seats;
//     this.ticket = ticket;
//   }
// }

// const c = new Car("uuu", 4, true, 2000);

// console.log("c", c);

// we need a way where this `new Vehicle` should not be allowed,but it still supports `extends Vehicle`

// we can do that by adding a keyword before class Vehicle

/*
By adding abstract, before class Vehicle 
you won't be able to create a new instance of Vehicle by doing `new Vehicle`
but you can easily use it in inheritence
*/

// POLYMORPHISM

//  lets say in the vehicle class we hae this method, startEngine()

// abstract class Vehicle {
//   engine: string;
//   wheel: number;

//   constructor(engine: string, wheel: number) {
//     this.engine = engine;
//     this.wheel = wheel;
//   }

//   startEngine() {
//     console.log(this.engine, "Started");
//   }
// }

// class Bus extends Vehicle {
//   no_of_seats: number;
//   ticket: number;

//   constructor(
//     engine: string,
//     wheel: number,
//     no_of_seats: number,
//     ticket: number
//   ) {
//     super(engine, wheel);

//     this.no_of_seats = no_of_seats;
//     this.ticket = ticket;
//   }

//   startEngine(): void {
//     alert(this.engine + "Started");
//   }
// }

/*
here if you see, in the parent class (Vehicle) 
we have startEngine method that logs this.engine
and here in Bus class we have startEngine method 
that alerts this.engine.


here function names are same

are their implementation same -> no,



*/

// ENCAPSULATION;

// let id_counter = 1;

// class Students {
//   name: string;
//   age: number;
//   private id: number; // private means this key will be accessible only inside this class, by default every key is public
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this.id = id_counter;
//     id_counter++;
//   }

//   // this is a getter, getter must return something,
//   // using this getter method you can read the value, but you will not be able to change the value
//   get ID() {
//     return this.id;
//   }
// }

// const s = new Students("a", 20);
// s.age = 30;

// console.table(s.ID);

/*
don't you think this `id_counter` wala part is just a hack?

like creating a counter `id_counter` outside of your class and using that to keep the track of id,

it seems like its a outside variable.

so how to solve that?


so , the outside variable `id_counter` is solving the problem of  giving incremental id 

so, basically i need a single variable that will be consistent across all the instances

across all the instances -> means const s = new Students("a", 20);, const t = new Students("a", 20);-> here s & t are different instances 
means in both `s` and `t` object that variable is going to be present

so for that we have a new keyword called -> static

*/

/*
Short Question

What does `this` represents when we do  this.name or this.id_counter

`const s = new Students("a", 20)`  -> here this represents `s`

`const t = new Students("b", 40)` -> here in this case this represents `t`

so `this` value is dynamic

but we don't want this for  id_counter,  

so how do you access a static property, you accesss it not from this, but from class itself.



*/

class Students {
  name: string;
  age: number;
  private id: number; //private means this key will be accessible only inside this class, by default every key is public
  static id_counter: number = 1;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id = Students.id_counter; // this is how you can access static variables, by doing this.id_counter you will not be able to get id_counter
    Students.id_counter++;
  }

  get ID() {
    return this.id;
  }
}

const s = new Students("a", 20);
s.age = 30;
console.table(s.ID);

const t = new Students("b", 40);

console.table(t);
