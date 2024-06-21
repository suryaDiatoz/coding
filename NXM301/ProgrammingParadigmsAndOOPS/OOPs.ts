class Vehicle {
  engine: string;
  wheel: number;

  constructor(engine: string, wheel: number) {
    this.engine = engine;
    this.wheel - wheel;
  }
}

// this is inheritence ,(extends wala part is inheritence)
class Car extends Vehicle {
  isAC: boolean;
  price: number;

  constructor(engine: string, wheel: number, isAC: boolean, price: number) {
    super(engine, wheel); // this super method is the constructor of parent class, here parent class is `Vehicle`
  }
}

// this is inheritence ,(extends wala part is inheritence)
class Bus extends Vehicle {}
