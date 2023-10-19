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
