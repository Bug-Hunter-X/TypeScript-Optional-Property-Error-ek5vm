function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

printName({ name: "John Doe", age: 30 });
printName({ name: "Jane Doe" }); // This will work fine
printName({}); // This will throw an error because name is required