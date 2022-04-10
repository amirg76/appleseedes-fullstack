const arr = [1, 7, 3, 0, -5, 7, 3, 9];
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

function arrayLength(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) sum++;
  return sum;
}
let arrLength = arrayLength(arr);
console.log(arrLength);

function arraySum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) sum += arr[index];
  return sum;
}
let arrSum = arraySum(arr);
console.log(arrSum);

function arrayMulti(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) sum *= arr[index];
  return sum;
}
let arrMulti = arrayMulti(arr);
console.log(arrMulti);
