// Block 1

function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

// result- 1.console.log-undifined :a-undifined becuse a is var that declere after the log.
// 2. console.log-2: function foo call from console log and return 2

//if var a=1 was before console.log(a) it will be result 1
/////////////////////////////////////////

//Block 2

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};

console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//result - 1. console.log-'Aurelio De Rosa' - the fullname inside prop is the obj that this inside the function refer to and ignore the decleriton of fullname in top and insdie prop.
// 2. console.log -  "John Doe" - test become the function getFullName inside obj.prop and now this refer to the global.

////////////////////////////////////////////////

// Block 3

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

//result - 1.log undifined - a is declere inside function there is no access to him.
// 2. log number - b is inside function without specific declaration can access from every place/.

// if a was without let type the log was 1;
/////////////////////////////////////////////////

// Block 4

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

//result - 1. console.log(2) X2 - only last function will work becouse the same name the last function is overwrite with the order of declertion

//if we change name of func and calling it will be console.log(1)
/////////////////////////////////

// Block 5

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
// console.log(e);

// result - 1. console.log=1 - d without specific declaration can access from every place.
// 2. console.log=undifined - e was declered inside function cant access outside.

// if we change the declertion of e without var we can access to e

/////////////////////////////////////////////////////////////////

//Block 6

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

// result -1. console.log="Value of f in local scope: ", 1 - f is declerde before
// 2. console.log="Value of f in global scope: ", undifind - f is declerde only the vereble with out assgin

// if var f=1 was declared before second log it will be 1
