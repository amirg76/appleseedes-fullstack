// 1.
function isString(str, logStr) {
  if (typeof str === "string") {
    logStr(str);
  }
}

function logStr(str) {
  return console.log(str);
}

isString("abc", logStr);

// 2.
function firstWordUpperCase(str, createDashes) {
  str = str[0].toUpperCase() + str.slice(1);
  return createDashes(str);
}

function createDashes(str) {
  return (dashStr = str.split("").join("_"));
}

// 3.
console.log(firstWordUpperCase("abcdefg", createDashes));

// 4.
function numberOfWords(str, cheakIfCapital) {
  let sum = str.length;
  return cheakIfCapital(str, sum);
}
function cheakIfCapital(str, sum) {
  let newStr = str.toUpperCase();
  let sum1 = 0;
  if (newStr === str) sum1 = sum + 1;
  return sum1 > sum ? "THE LETTER IS CAPITAL" : "the letter is not capital";
}

console.log(numberOfWords("ABCDEFG", cheakIfCapital));
