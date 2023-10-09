// type annotations for functions --> code we add to tell Typescript what type of arguments a function will receive and what type of values it will return
// type inference for functions --> typescript tries to figure out what type of value a function will return

const add = (a: number, b: number): number => {
  // a & b are arguments that are passed into the function
  // ": number" is the return type annotation
  return a + b; // function body, typescript knows that a & b are numbers because of the type annotations
};

//when we have arguments, we always have to use type annotations for these arguments with typescript.
//We don't have to necessarily use type annotations for the return value, typescript will figure it out for us (type inference).
//But it's good practice to use type annotations for the return value as well.

// typescript doesn't check if our logic is right or not.
//So if i have a function like the one below, typescript will just say that the function will say a type of "void" is the return of the function since it doesn't return anything.
// But if we use type annotation for the return value, an error will get thrown because we are telling typescript that the function will return a number, but it doesn't.
// actually, we've forgot to add the "return" keyword in the function body, so the function will return "undefined" instead of "void".

const subtract = (a: number, b: number) => {
  a - b;
};

const subtract2 = (a: number, b: number): number => {
  // here typescript sees that there's an issue with the function body. We are telling typescript that the function will return a number, but it doesn't.
  a - b;
};

const subtract3 = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  // void is used here because the function doesn't return anything since it only console.logs the value of "message". This means that there will be no return value for this function.
  console.log(message);
};

const throwError = (message: string): never => {
  // never means that we will never reach the end of the function. This means the function will never be executed completely and we'll exit the function early wihtout returning anything
  throw new Error(message);
};

const throwError2 = (message: string): string => {
  //if there's an error, the function will return a string. we only annotate a function with "never" if we are sure that the function will never be executed completely.
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const throwError3 = (message: string): void => {
  // this function will never return anything, so we can annotate it with "void" or "never"
  if (!message) {
    throw new Error(message);
  }
};
