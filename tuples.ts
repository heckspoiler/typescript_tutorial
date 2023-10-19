// Tuple --> array-like structure whre each element represents some property of a record

// object representing a drink

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// let's represent the object above as an array (tuple)
const coke = ['brown', true, 40]; //if we hover over it, typescript says it could be a string, boolean or number. This is not very descriptive. We can use type aliases to make the code more readable. The order inside of a tuble
// is very important. If we change the order of the elements, we get an error.

const pepsi: [string, boolean, number] = ['brown', true, 40];
// this is a tuple with type annotations. We can also use type aliases to make the code more readable. this array always has a very specific ordering of types in it. If we now try to change the first element to a number, we get an error.

// Type aliases

type Drink = [string, boolean, number]; // types are used to create a new type alias instead of always having to write out the type annotation every time. This is not an array, it creates the idea of a tuple inside of our application.
// we would now create the tuple like this:

const pepsi2: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tuples aren't used on a regular basis in typescript.

const carSpecs: [number, number] = [400, 3354]; // this is a tuple. What do those numbers mean? It's not very descriptive.

const carStats = {
  horsepower: 400,
  weight: 3354,
};

// in an object it's immediately clear what the numbers mean. We can also use type aliases to make the code more readable.
