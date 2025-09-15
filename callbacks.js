//  Simple callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
greet("Enrique", () => console.log("Welcome!"));

//  Math callback
function processNum(num, fn) {
  return fn(num);
}
console.log(processNum(5, n => n * 2)); // 10

//  setTimeout
setTimeout(() => console.log("Executed later"), 1000);

//  Event listener
document.addEventListener("click", () => console.log("Clicked!"));

//  Custom function with callback
function doTask(task, cb) {
  console.log("Doing task:", task);
  cb("Done");
}
doTask("Homework", msg => console.log(msg));