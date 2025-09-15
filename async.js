//  Basic async function
async function hello() {
  return "Hello";
}
hello().then(console.log);

//  Awaiting a promise
async function fetchData() {
  let result = await Promise.resolve("Data received");
  console.log(result);
}
fetchData();

//  Try/catch
async function safe() {
  try {
    let data = await Promise.reject("Failed");
  } catch (e) {
    console.log(e);
  }
}
safe();

//  Sequential
async function steps() {
  let a = await Promise.resolve(1);
  let b = await Promise.resolve(2);
  console.log(a + b);
}
steps();

//  Parallel with Promise.all
async function parallel() {
  let [x, y] = await Promise.all([Promise.resolve(5), Promise.resolve(10)]);
  console.log(x + y);
}
parallel();
