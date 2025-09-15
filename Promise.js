//  Basic promise
const promise1 = new Promise((resolve) => resolve("Success"));
promise1.then(msg => console.log(msg));

//  Rejecting
const promise2 = new Promise((_, reject) => reject("Error"));
promise2.catch(err => console.log(err));

// Chaining
Promise.resolve(2)
  .then(n => n * 2)
  .then(n => console.log(n)); // 4

//  Promise.all
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(values => console.log(values)); // [1,2]

//  Promise.race
Promise.race([
  new Promise(res => setTimeout(() => res("First"), 500)),
  new Promise(res => setTimeout(() => res("Second"), 1000))
]).then(val => console.log(val)); // First
