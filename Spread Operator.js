// Copying arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]

//  Merging arrays
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

// Adding elements while copying
const nums = [2, 3];
const updated = [1, ...nums, 4];
console.log(updated); // [1, 2, 3, 4]

// Copying objects
const obj1 = {x: 1, y: 2};
const obj2 = {...obj1, z: 3};
console.log(obj2); // {x:1, y:2, z:3}

// Function arguments
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6