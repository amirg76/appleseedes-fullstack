// Block 1

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

//  firstResult =function otherFunction(input) {
// return b;
// } becouse someFunction return otherFunction(all the syntec);

//result=undifend - becouse firstResult will invoke and return the b inside otherFunction
/////////////////////////////////////////////

//Block 2

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);

// console.log a=1 - b2() call function b2 and put 10 inside a that is local

///////////////////////////////////////////////

//Block 3

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

//result 3 -console.log :3  times run console.log with i=3 becouse the loop end / and   before function log start becouse timeout of 1ms and the loop wont wait
/////////////////////////////////////////
