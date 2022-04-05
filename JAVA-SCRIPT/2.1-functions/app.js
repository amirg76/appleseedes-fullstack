function describeCountry(country, population, capitalCity) {
  return `'${country} has ${population} million people and its capital city is ${capitalCity}'`;
}
let fin = describeCountry("Finland", 6, " Helsinki");
let eng = describeCountry("England", 55, "London");
let ita = describeCountry("Italy", 59, "Rome");
console.log(fin);
console.log(eng);
console.log(ita);
