//  Array destructuring
const [first, second] = [10, 20];
console.log(first, second); // 10 20

//  Skip elements
const [a,,c] = [1, 2, 3];
console.log(c); // 3

//  Object destructuring
const person = {name: "Enrique", age: 30};
const {name, age} = person;
console.log(name, age); // Enrique 30

//  Default values
const {country = "USA"} = person;
console.log(country); // USA

//  Nested destructuring
const user = {info: {id: 5, email: "test@example.com"}};
const {info: {email}} = user;
console.log(email); // test@example.com