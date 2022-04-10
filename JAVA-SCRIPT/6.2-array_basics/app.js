const people = ["Greg", "Mary", "Devon", "James"];
for (let index = 0; index < people.length; index++) {
  console.log(people[index]);
}
// REMOVE GREG
people.shift();
console.log(people);
// REMOVE JAMES
people.pop();
console.log(people);
//ADD MATT
people.unshift("Matt");
console.log(people);
//ADD MY NAME
people.push("Amir");
console.log(people);
/////

for (let index = 0; index < people.length; index++) {
  if (people[index] === "Mary") {
    console.log("Mary");
    break;
  }
}
///////
let people2 = people.slice(2);
console.log(people2);
//////
let position = people.indexOf("Mary");
console.log(position);
//////
let positionFoo = people.indexOf("Foo");
console.log(positionFoo);
//////
const people1 = ["Greg", "Mary", "Devon", "James"];
people1.splice(2, 1, "Elizabeth", "Artie");
console.log(people1);
//////
const withBob = people1.concat("Bob");
console.log(withBob);
