//  map
const nums = [1,2,3];
console.log(nums.map(n => n*2)); // [2,4,6]

//  filter
console.log(nums.filter(n => n > 1)); // [2,3]

//  reduce
console.log(nums.reduce((sum, n) => sum + n, 0)); // 6

//  find
console.log(nums.find(n => n === 2)); // 2

//  forEach
nums.forEach(n => console.log(n)); // 1 2 3