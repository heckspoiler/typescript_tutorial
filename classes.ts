// a class is a blueprint to create an object with some fields (values) and methods (functions) to represent a "thing"

class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('boop boop');
  }
}

const vehicle = new Vehicle();

vehicle.honk();
vehicle.drive();
