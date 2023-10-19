// creates a new type, describing the property names and value types of an object. We create a custom type (same as boolean, string etc.), that we define.

interface Reportable {
  summary(): string;
}

//both of these objects represent something completely different, but have a summary function that returns a string. that means, that they are both considiered to be "Reportable"-types from the Reportable interface.
// we can use an interface to describe the shape or different properties of very different objects. This enables us to write quite generic functions and generic looking interfaces.

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name}, ${this.year}, ${this.broken} `;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink is ${this.color} and has ${this.sugar} grams of sugar`;
  },
};

//this is the function without an interface that we've created and the argument for the printVehicle function is really long and not readable. That's why interfaces are used and it's shown below.

// const printVehicle = (vehicle: {
//   name: string;
//   year: 2000;
//   broken: boolean;
// }): void => {
//
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

// fixing long annotations with interfaces

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary);
};

printSummary(oldCivic);
printSummary(drink);
