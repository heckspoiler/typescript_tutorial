// typed arrays --> arrays where each element is some consistent type of value. In typescript, we only stick elements of the same type into an array.
const carMakers = [
  // type annotations isn't really necessary here because typescript can infer the type of value that is used in this array

  'ford',
  'toyota',
  'bmw',
  'mercedes',
  'opel',
  'audi',
];

const dickheads: string[] = []; // if we initialize the array as an empty array and then push elements into it, we need to add an annotation for typescript to know what type of value we want to push into the array

const dates = [
  // type annotations isn't really necessary here because typescript can infer the type of value that is used in this array
  new Date(),
  new Date(),
  new Date(),
  new Date(),
  new Date(),
  new Date(),
];

// type annotations here would be string[][], since it's a two dimensional array. but typescript can infer the type of value that is used in this array.
const carsByMake = [['f150'], ['corolla'], ['m4'], ['g500'], ['astra'], ['a4']];

// Here we would have to use type annotations, since typescript can't infer the type of value that is used in this array.
const dickheadsWifes: string[][] = [];

// why do we care for arrays in typescript?

// 1. TS can do type inference when extracting values from an array
// 2. TS can prevent us from adding incompatible values to the array
// 3. We can get help with 'map', 'forEach', 'reduce' functions
// 4. Flexible - arrays can still contain multiple different types

// help with inference when extracting values

const car = carMakers[0]; // typescript knows that the variable "car" is a string, because it knows that the array "carMakers" only contains strings
const myCar = carMakers.pop(); // typescript knows that the variable "myCar" is a string, because it knows that the array "carMakers" only contains strings

// prevent incompatible values
carMakers.push(22); // we get an error here because we try to push a number into an array that only contains strings

// help with 'map', 'forEach', 'reduce' functions

carMakers.map((car: string): string => {
  return `this is a ${car}`;
});

// flexible types

const importantDates: (string | Date | number)[] = []; // this is how a flexible array looks like. It can contain multiple different types of values. We can also use type aliases to make the code more readable.

importantDates.push(new Date());
importantDates.push('2020-10-10');
importantDates.push(100);
importantDates.push([1, 2, 3, 4, 5, 6, 7, 8, 9]); // this is an array inside an array, so it's a two dimensional array. We can also use type aliases to make the code more readable. But it doesn't work because of the annotation.

//When to use typed arrays? --> any time we need to represent a collection of records with some arbitrary sort order
// arbitrary = willkürlich

// Tuple --> array-like structure whre each element represents some property of a record

// object representing a drink

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// let's represent the object above as an array (tuple)

const pepsi: [string, boolean, number] = ['brown', true, 40];
// this is a tuple. We use a tuple when we want to represent a record with some kind of property. The order of the elements in the tuple is very important. If we change the order of the elements, we get an error.
