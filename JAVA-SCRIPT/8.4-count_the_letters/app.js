const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
let maxVal = 0;
let maxChar = "";

function countLetters(array) {
  let arrToString = array.join("").toLowerCase().split().join(" ");
  const lettersObj = {};
  for (let i = 0; i < arrToString.length; i++) {
    lettersObj[arrToString[i]]
      ? (lettersObj[arrToString[i]] = 1)
      : lettersObj[arrToString[i]]++;

    // lettersObj[arrToString[i]]=lettersObj[arrToString[i]]+1 ||1;
  }
  for (char in lettersObj) {
    if (lettersObj[char] > maxVal) {
      maxChar = char;
      maxVal = lettersObj[char];
    }
  }

  // maxVal =Math.max(...Object.values(lettersObj))
  console.log(maxVal);
  return lettersObj;
}

console.log(countLetters(array));
