// a class is a blueprint to create an object with some fields (values) and methods (functions) to represent a "thing"

class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('boop boop');
  }
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// inheritance system in typescript, changed the drive method in class (overwritten it)
// what are modifiers? modifiers are keywords that we can place on different methods and properties inside of a class

// modifier 1: public: this method can be called anywhere, anytime (this is by default if we define a method or property)
// modifier 2: private: this method can only be called by other methods in this class
// modifier 3: protected: this method can be called by other methods in this class, or by other methods in child classes

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const wroom = new Car(4, 'red');
console.log(wroom.color);
wroom.startDrivingProcess();

// where to use classes

// why do we care about classes? for the same reason we care about interfaces -> we're going to use it very heavily. First application next
