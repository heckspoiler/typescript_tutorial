// type annotations: the annotation is the ": number" part of the code. We are telling typescript that the variable "apples" will always be a number.

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// string, number = type of value; "fast", 5 = value,

// built in objects

let now: Date = new Date(); // Date is a built in object in JS

// Array

let colors: string[] = ['red', 'green', 'blue']; // we assign an array of strings to the variable "colors"
let myNumbers: number[] = [1, 2, 3]; // we assign an array of numbers to the variable "myNumbers"
let truths: boolean[] = [true, true, false]; // we assign an array of booleans to the variable "truths"

//Classes

class Genre {}

let rap: Genre = new Genre(); // we assign a new instance of the Genre class to the variable "genre", we refer to the type of class "Genre" in the annotaions and make a new instance of it with the "new" keyword

// Object literal

let point: { x: number; y: number; a: string } = {
  x: 10,
  y: 10,
  a: 'hello',
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  // void is used here because the function doesn't return anything since it only console.logs the value of "i". if it returned a number we would use ": number" instead of ": void"
  console.log(i);
};

// When to use annotations

// in a video, we saw that we could remove many of the annotations above and typescript would still guess the right type of value that is used in this variable. This is called type inference. So when should we use annotations?

const color = 'red';
// const color = variable declaration, "red" = variable initialization
// If declaration and initialization are on the same line, Typescript will figure out the type of "color" for us. If we declare the variable on one line and initialize it later, we need to add an annotation.

// so when should we use type annotations?

// 1) when a function returns the 'any' type and we need to clarify the value
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // JSON.parse returns the "any" type, so we add an annotation to clarify the value

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // we declare the variable "foundWord" on one line
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true; // we initialize it later
  }
}

// 3) when we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // we want the variable to be either a boolean or a number, so we add an annotation
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; // we initialize it later
  }
}
