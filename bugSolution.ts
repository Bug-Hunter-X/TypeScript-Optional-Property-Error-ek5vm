function printName(person: { name: string; age?: number }) {
  console.log(person.name); // error: Object is possibly 'undefined'
}

function printNameSafe(person: { name: string; age?: number }) {
  console.log(person.name ?? "Unknown"); // solution 1
}

function printNameSafe2(person: { name: string; age?: number }) {
  console.log(person?.name ?? "Unknown"); // solution 2
}

printNameSafe({ name: "John Doe", age: 30 });
printNameSafe({ name: "Jane Doe" });
printNameSafe({});

printNameSafe2({ name: "John Doe", age: 30 });
printNameSafe2({ name: "Jane Doe" });
printNameSafe2({});