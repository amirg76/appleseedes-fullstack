// 1.
//console.log(this);

//this will point to windows object because the console log commend is showing in outside of any function or object so it refer to the place that she call.
////////////////////////

// 2.
//const myObj = {
//  name: "Timmy",
//  greet: () => {
//  console.log(`Hello ${this.name}`);
//  },
// };
// myObj.greet();

// a. this will point to windows object because  the console log commend is showing inside arrow function, and in arrow function the this is refer to scope before the loction of the function

//b. can fix the greet function to reguler function-->

// const myObj = {
//  name: "Timmy",
//  greet ()  {
//  console.log(`Hello ${this.name}`);
//  },
// };
////////////////////////////////

// 3.
// const myFuncDec = function () {
//   console.log(this);
// };

//this will point to windows object because the console log commend is showing inside function and this refer to the object that hold the function that is look like in global scope;

/////////////////////////////////////

// 4.
//const myFuncArrow = () => {
//  console.log(this);
// };
// myFuncArrow();

// this will point to windows object because  the console log commend is showing inside arrow function, and in arrow function the this is refer to scope before the loction of the function

///////////////////////////////////////

// 5.
// document.querySelector(".element").addEventListener(() => {
//  console.log(this);
// })

//a.
// this will point to window object because the console log commend is showing inside addEventListener arrow function and this is refer to scope before the loction of the function
// it will not work because addEventListener need parameter

//b.
// document.querySelector(".element").addEventListener("click", function () {
//   console.log(this);
// });
