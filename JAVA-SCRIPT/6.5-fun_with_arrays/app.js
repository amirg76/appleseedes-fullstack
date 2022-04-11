const fillArray = new Array(100).fill({ name: "amir", price: 45 });
console.log(fillArray);
///////////////
const numberArray = Array.from({ length: 100 }, (_, index) => index + 1);
console.log(numberArray);
///////////////////
let convertObj = Object.values(fillArray);

console.log(convertObj);
///////////////////
let arrayToObj = { ...[...fillArray] };
console.log(arrayToObj);
////////////////////
console.log(Array.isArray(fillArray));
////////////////////
let oldArray = [1, 2, 3, 4, 5];
let newArray = oldArray.slice();
newArray.push(6);
console.log(oldArray);
console.log(newArray);
//////////////////
let sameArray = oldArray;
sameArray.push(6);
console.log(oldArray);
console.log(sameArray);
