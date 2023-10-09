const profile = {
  name: 'John',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  }, // we can also annotate functions inside objects
};

// now we try to destructuring the age property from the profile object

const { age }: { age: number } = profile; // we get an error here because we didn't annotate the age property inside the profile object. Typescript doesn't know what type of value the age property has, so it can't check if the value we assign to the age variable is of the same type. We can fix this by adding an annotation to the age property inside the profile object.

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
