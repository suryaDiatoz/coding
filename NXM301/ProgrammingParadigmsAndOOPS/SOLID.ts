class Student {
  constructor() {
    // Define the keys here
  }

  register() {}

  sendEmail() {}

  Assignments() {}
}

class Player {
  constructor() {
    // define the keys here
  }

  //   swords man
  slash() {}

  //   Archer
  snipe() {}

  //   Assasin
  poison() {}
}

/*
lets suppose you started building a game like pubg, 

in the initial phase, we added slash , snipe, and poison thing,

and published the app

later we got the requirement of adding `Swordsman` feature

should we change the existing code?

no we shouldn't thats not the best practise


so how should we new feature into older code ?

here it is in below
*/

class Swordsman extends Player {
  constructor() {
    super();
  }

  slash() {}
}

/*
if we follow the above approach, in that case we don't even have to read the older code,
we just have to focus on adding new feature.


Why its a best approach?

Lets suppose in construct week project, 4 people are working together.

You have been assigned to add a new feture where already 3 people were working.


Now you have to read the older code and understand the code written by others and then you can add the new feature.

This can create bugs.


so its better to follow `Open Close Principle` and in this manner you don't have to read the older code, you can directly add new feature on top of that

*/

// L -> Liskov Substitution Principle

class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  area() {
    return this.height * this.height;
  }
}

// we have a relationship with rectangle and square,
// in square all sides are equal
// in rectangle length and breadth is there
// if length and breadth of a rectangle become same, then it will  be square

class Square extends Rectangle {
  constructor(width: number) {
    super(width, width);
  }

  setWidth(width: number): void {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number): void {
    this.height = height;
    this.width = height;
  }
}

const sq = new Square(5);
sq.setWidth(6);
console.log("sq", sq.area());

const rec = new Rectangle(5, 5);
rec.setWidth(6);

console.log(rec.area());
